# 面向对象编程(Object Oriented Programming)
[[toc]]

## 定义

面向对象编程(Object Oriented Programming)是一种编程范式，其核心思想是将程序组织为对象的集合，每个对象都拥有自己的属性和方法，并且可以与其他对象进行交互。

OOP在C#中有充分的体现，了解OOP思想有助于了解C#语言的使用。

## 特性

### 封装

* 定义：将类的某些信息隐藏在类内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏信息的操作和访问。
* 体现：类中属性、方法的修饰符如public、private控制其中的显示与隐藏。

### 继承

* 定义：子类自动继承父类的属性和方法，并可以添加新的属性和方法。
* 体现：关键字extends（继承）使得子类能够有父类的属性和方法，并能够拓展自己独有的方法。

### 多态

* 定义：同一个引用类型，使用不同的实例而执行不同操作。
* 体现：利用重载（overload），重写（override）还有继承（extends）实现方法和子类的多样。


## 拓展

### [ECS(Entity Component System)架构]()

* ECS(Entity Component System)是面向数据(Data-Oriented)技术栈的核心，ECS有三个主要部分：Entities(实体)、Components(组件)、Systems(系统)。
* 在一个World中拥有用于管理Entity和Component的System就是基本结构，相对于OOP的对不同的整个Object管理，它单独对Entity或者Component管理。
* 三者关系：Entity是一个实体，没有数据和方法，Component为Entity添加数据，Systems提供方法控制Entities和Components。

### GDC上OVERWATCH关于ECS的分享

[b站UP翻译](https://www.bilibili.com/video/BV1p4411k7N8/)

[油管原链接](https://youtu.be/W3aieHjyNvw)