/* 1. Buat sebuah class dengan nama Person.
Class Person memiliki property sebagai berikut:
- name
- age
- gender
- height
Class tersebut juga memiliki method sebagai berikut:
- setName(name) -> untuk menyimpan name
- setAge(age) -> untuk menyimpan age
- setGender(gender) -> untuk menyimpan gender
- setHeight(height) -> untuk menyimpan height
- getName(name) -> untuk mengambil name
- getAge(age) -> untuk mengambil age
- getGender(gender) -> untuk mengambil gender
- getHeight(height) -> untuk mengambil height */

class Person 
{
    name;
    age;
    gender;
    height;

    setName(name)
    {
        this.name = name;
    }
    setAge(age)
    {
        this.age = age;
    }
    setGender(gender)
    {
        this.gender = gender;
    }
    setHeight(height)
    {
        this.height = height;
    }

     getName()
    {
        return this.name;
    }
    getAge()
    {
        return this.age;
    }
    getGender()
    {
        return this.age;
    }
    getHeight()
    {
        return this.height;
    }
}