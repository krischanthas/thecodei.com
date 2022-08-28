---
title: Object Oriented Programing Princicples
date: 2022-08-01
---

# **_Encapsulation_**

There are two important aspects of encapsulation:

1. Access restriction - preventing one object from accessing another's internal state, for example.
2. Namespaces/scopes - allowing the same name to have different meanings in different contexts.

Encapsulation mechanisms are essential for reducing couplings between software components. Many encapsulation mechanisms originated with non-object-oriented languages. Object-oriented languages add additional encapsulation mechanisms.

# **_Inheritance_**

There are two types of inheritance in OOLs

interface inheritance and
implementation inheritance.
Interface inheritance is only necessary in typed OOLs. This is best understood when considering delegation-based design patterns.

Implementation inheritance mechanisms depend on the type of OOL.

For class-based OOLs, classes inherit from classes.
For classless OOLs, objects inherit from objects.

# **_Polymorphism_**

Polymorphism refers to the ability of different objects to respond to the same message in different ways. Polymorphism is essential for modeling our world including our social environment. We frequently use the same phrases and sentences to mean different things in different contexts. Often there is an abstract sameness, but concrete differences.

For example, say the following sentence to two different architects and you will likely get two houses: "Build me a house". Abstractly, both architects will do the same thing but many of the details will differ.

In early structured design methodology there were three principle types of control or data structure elements: sequence, alteration, and repetition. Polymorphism is often used as an alternative to alternation.

Polymorphism is implemented with a dispatch mechanism. This mechanism may only be dependent on the object that receives a message or it may also be dependent on message parameters.
