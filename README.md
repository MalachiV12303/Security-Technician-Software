# Assignment from Advanced Software Programming (COP4504) 2024
This course covers advanced concepts of computer programming including object-oriented programming, procedural and data implementation and program modularity. This is an advanced level programming course and it is recommended that students have completed a lower level programming language. 

## Project Proposal/First Stages
- I will create an application that will assist employees of my company by automating a specific process.  The “process” is calculating prices for three different security equipment options. Currently employees write out this math by hand, remember numbers such as points available, and organize all this information together.  The software being created will automatically add points, all pieces of equipment, activation fees, tax, vouchers and return with totals.  It will also temporarily store the three separate package options.

![aaaaa](https://github.com/user-attachments/assets/aab7d13b-1b7a-4afd-93cc-38c7b3155604)

![bbb](https://github.com/user-attachments/assets/a967ae9b-b117-4bb6-994e-4a7f4dc3b9b4)

## Feature One Update

![progress ss](https://github.com/user-attachments/assets/c43c58c9-e38d-44ae-9384-3a4d4331565f)

For the feature one update, I implemented adding equipment to a package.  This involved creating package objects, as well as creating reusable objects for each piece of equipment.  Each piece of equipment is learned in through JSX code, 
```
import { menuData } from './utils/MenuData.js';

menuData.map(({ title, content }) => (
  <ExpandableMenu title={title} content={content} />
);
```
menuData is a file consisting of an array full of each equipment name, cost, chime types, par pricing, and point values.  I have also added package objects, these consist of lists of equipment objects, and methods that affect the package, and check methods to check for better saving opportunities.  I was unable to display this information, but I have the groundwork for the project implemented.  Before the next update, I plan on adding package history, viewing, and inventory viewing.  After that, I plan on improving the styling of the project, but I prefer to do CSS styling once all functionality has been implemented.

## Feature Two Update

For the Feature Two Update/Release, first I implemented the view personal inventory function.  It will read a file containing a user’s personal inventory and will display the results.  

![Screenshot 2024-05-06 220704](https://github.com/user-attachments/assets/08ddcf3e-51cf-4ca6-8230-2ee92a76afc8)

Next, I implemented the view package history function, here a package created can be viewed and it utilizes a package file to determine cost, point value, quantity, and name of the item.  

![Screenshot 2024-05-06 220737](https://github.com/user-attachments/assets/8f1e445d-8de6-44c8-ab30-e4e3f0888167)
![Screenshot 2024-05-06 220752](https://github.com/user-attachments/assets/b3e295a3-00b9-40a0-b435-a52a44078b72)

Lastly, I improved the CSS to make the application more visually appealing and intuitive.  

![Screenshot 2024-05-06 220639](https://github.com/user-attachments/assets/2831523a-0624-465c-8633-175d52ddb136)

I was unable to to include an algorithm that searches for potential savings, as well as the ability to add three separate packages.  Overall, I think the project achieved my original goal, and it will reduce the time it takes to create package options.
