const mongoose = require('mongoose');

const Cat = require('./models/Cat');
const Person = require('./models/Person');

async function connectDb () {
    await mongoose.connect('mongodb://127.0.0.1:27017/catShelter')

    console.log('Connected to database');

    //READ
    // const cats = await Cat.find({age: 9});    
    // const cats = await Cat.findOne({age: 9});
    // const cats = await Cat.findById('5f9b7b3b9b0b3e1f1c9b0b3e');    

    //CREATE
    //method 1
    // const newCat = new Cat({
    //     name: 'Zuza',
    //     age: 9,
    //     breed: 'Persian',
    // });
    // await newCat.save();

    //method 2
    // const newCat = await Cat.create({
    //     name: 'Charli',
    //     age: 5,
    //     breed: 'British Shorthair'
    // });

    //UPDATE
    //method 1
    // const charli = await Cat.findOne({name: 'Charli'});
    // charli.age = 10;
    // await charli.save();

    //method 2 - native mongodb
    //await Cat.updateOne({ name: 'Charli' }, { $set: { age: 11 } });

    //method 3 - mongoose exrension
    //await Cat.findByIdAndUpdate('646fb0aae78effdf559f7a79',{ $set: { breed: 'Ulichna' } });

    //DELETE
    //method 1
   //  await Cat.deleteOne({ name: 'Zuza' });
    
   //method 2
    await Cat.findByIdAndDelete('646fb0aae78effdf559f7a79');

   // cats.forEach(cat => cat.greet());
   //cats.forEach(cat => console.log(cat.info));
    console.log(); 

    // creating collection Person
    // await Person.create({
    //     name: 'Pesho',
    //     age: 20,
    // });

    const cats = await Cat.find({breed: {$ne: 'Persian'}});
    console.log(cats);
}

connectDb(); 