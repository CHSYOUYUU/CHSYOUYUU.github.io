# 反射（Reflection）
[[toc]]

## [官方定义](https://learn.microsoft.com/zh-cn/dotnet/fundamentals/reflection/reflection)

System.Reflection 命名空间中的 类 与 System.Type 使你能够获取有关加载的**程序集**和其中定义的**类型的信息**，如类、接口和值类型（即结构和枚举）。 可以使用反射在运行时创建、调用和访问类型实例。

[程序集](https://learn.microsoft.com/zh-cn/previous-versions/ms173099(v=vs.120)) 包含模块、模块包含类型，而类型包含成员。 反射提供封装程序集、模块和类型的对象。 可以使用反射动态地创建类型的实例，将类型绑定到现有对象，或从现有对象中获取类型。 然后，可以调用类型的方法或访问其字段和属性。


## 个人理解

官方定义的很抽象，结合 [菜鸟教程](https://www.runoob.com/csharp/csharp-reflection.html) 里的解释，C#里的一般指，能够通过某个你**不知道类型**的对象中获取到他的类型、并调用其方法、属性等的过程。

* 这跟AOT的编译方式有关系，当程序编译后，就会生成程序集文件(.dll.exe后缀的文件)，想了解这些文件怎么来的可以参考这个视频
  [【底层】动态链接库(dll)是如何工作的？](https://www.bilibili.com/video/BV1vB4y1V7gR/)

## 应用

* 获取对应的程序集及类型信息。
  * 测试的类型：
    ```csharp
    public class TestClass
    {
      public string Name { get; set; }
      public int Number { get; set; }

      public int GetNameLen()
      {
        return Name.Length;
      }

      public int GetNumber()
      {
        return Number;
      }
    }  
    ```
  * 反射获取测试类型的相关信息可以参考以下代码，这里继承Mono是方便在Unity中测试。
    ```csharp
    using System.Reflection;
    using System;
    using UnityEngine;

     public class ReflectionTest : MonoBehaviour
     {
       // Start is called before the first frame update
       void Start()
       {
          Type type = Type.GetType("TestClass");
          Debug.Log(type.Name);
          Debug.Log(type.Assembly.ToString());
          
          //打印获取到的属性
          FieldInfo[] fieldInfos = type.GetFields();
          for(int i = 0; i < fieldInfos.Length; i++)
          {
            Debug.Log($"FieldInfo:{fieldInfos[i]}");
          }

          //打印获取到的方法
          MethodInfo[] methodInfos = type.GetMethods();
          for (int i = 0; i < methodInfos.Length; i++)
          {
            Debug.Log($"MethodInfos:{methodInfos[i]}");
          }
       }
    }
    ```
* 动态创建类型实例并执行其中的方法：
  * 测试的类型：
    ```csharp
    public class TestClass
    {
      public string Name { get; set; }
      public int Number { get; set; }
    
      //新增一个构造函数
      public TestClass()
      {
        Name = "test";
        Number = 100;
      }

      public int GetNameLen()
      {
        return Name.Length;
      }

      public int GetNumber()
      {
        return Number;
      }
    }  
    ```
  * 反射获取测试类型的相关信息可以参考以下代码，这里继承Mono是方便在Unity中测试。
    ```csharp
    using System.Reflection;
    using System;
    using UnityEngine;

     public class ReflectionTest : MonoBehaviour
     {
       // Start is called before the first frame update
       void Start()
       {
          Type type = Type.GetType("TestClass");
          //创建对应的类
          object instance = Activator.CreateInstance(type);
          //获取方法
          MethodInfo nameLenMethod = type.GetMethod("GetNameLen");
          MethodInfo numMethod = type.GetMethod("GetNumber");
          //调用方法
          Debug.Log(nameLenMethod.Invoke(instance, null));
          Debug.Log(numMethod.Invoke(instance, null));
       }
    }
    ```
  * 动态工厂模式创建对象可以稍微调整对应的输出，工厂类内部获取需要创建的类名字符串作为参数，然后根据获取的类名创建对象返回，具体形式可以参考最底下视频分享。
* 插件框架、自动化工具
  * 自动化测试，插件框架主要也是获取对应的类，并获取对应的属性，方法再调用。测试的反射获取类与上面的一致，这是自动化测试的示例：
  ```csharp
    using System.Reflection;
    using System;
    using UnityEngine;

     public class ReflectionTest : MonoBehaviour
     {
       // Start is called before the first frame update
       void Start()
       {
          Type type = Type.GetType("TestClass");

          // 获取所有方法包括private的
          MethodInfo[] methods = type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.NonPublic);

          // 执行每个方法
          foreach (var method in methods)
          {
            // 用于限定测试的方法前缀，我这里仅用了Get
            if (method.Name.StartsWith("Get"))
            {
                Debug.Log($"Running {method.Name}...");
                method.Invoke(new TestClass(), null);
            }
          }
       } 
    }
    ```

## 优点

* 提高了程序的灵活性和扩展性，反射可操作任意类型，无需编写硬编码逻辑。
* 降低耦合性，提高自适应能力。

## 缺点

* 性能差，使用反射基本上是一种解释操作，用于字段和方法接入时要远慢于直接代码。
* 可读性和可维护性差，程序内部逻辑涉及动态元素，比相应的直接代码更复杂并且生成的错误需要运行时才能发现。

## 总结

* 反射指程序可以访问、检测和修改它本身状态或行为的一种能力；C#中就是获取有关加载的程序集和其中定义的类型的信息，如类、接口和值类型。 并且在运行时动态地创建类型的实例创建、调用和访问类型实例。
* 反射提高了程序的灵活性和拓展性，降低了耦合，但是性能开销大，维护成本也高，需要适配对应场景。
* 一般的业务开发中应用并不多，了解和发现都是在架构或者插件中，还有热更中也会运用到。我认为了解反射其实更多是为后续能更好的去理解框架底层设计的巧妙之处作铺垫。

## 拓展

* 泛型
  * 待更新

## 拓展参考
* <https://www.bilibili.com/video/BV11N411c7wt/>