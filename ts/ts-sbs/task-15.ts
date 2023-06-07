/*

Intro:

    Our attempt to Open Source didn't work quite as
    expected. It turned out there were already many
    existing functional JS libraries.

    All the remaining developers left the company as
    well. It seems that they are joining a very
    ambitious startup which re-invented a juicer and
    raised millions of dollars.
    Too bad we cannot compete with this kind of
    financing even though we believe our idea is
    great.

    It's time to shine for the last time and publish
    our new invention: object-constructor as our CTO
    named it. A small library which helps
    manipulating an object.

Exercise:

    Here is a library which helps manipulating objects.
    We tried to write type annotations and we failed.
    Please help!

*/

type NewObj<T, K extends string, V> = T & {[NK in K]: V} //define new type for 'set' method ouput
//K extends string, since it can only be string(?), NK in K - I don't get it, otherwise, T receives all 
//keys from K: V;

export class ObjectManipulator<T> { //assing generict type for Class

    constructor(protected obj: T) {} //assign generic type for object

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<NewObj<T, K, V>> {
        return new ObjectManipulator({...this.obj, [key]: value} as NewObj<T, K, V>);
    }

    //assign types for function and arguments, return new Object as a generic value forclass type with generic
    //and argument types. Give new Object newObj type through 'as' operator.
    public get<K extends keyof T>(key: K): T[K] { //standard obj types
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> { //standart, retuns class type,
    //ommiting removed keys
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T { //simply returns object
        return this.obj;
    }
}