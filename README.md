# Assignment from Advanced Software Programming (COP4504)
This course covers advanced concepts of computer programming including object-oriented programming, procedural and data implementation and program modularity. This is an advanced level programming course and it is recommended that students have completed a lower level programming language.

## Project Proposal/First Stages
- I will create an application that will assist employees of my company by automating a specific process.  The “process” is calculating prices for three different security equipment options. Currently employees write out this math by hand, remember numbers such as points available, and organize all this information together.  The software being created will automatically add points, all pieces of equipment, activation fees, tax, vouchers and return with totals.  It will also temporarily store the three separate package options.

![aaaaa](https://github.com/user-attachments/assets/18b98890-2397-4eca-a71c-1b85913b15e0)

![bbb](https://github.com/user-attachments/assets/c91f010d-3f7d-4a91-8d38-fb32044f4f8e)

## Feature One Update

![progress ss](https://github.com/user-attachments/assets/76a52004-7748-4a46-9e57-8bf67c2b7fed)

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

![Screenshot 2024-05-06 220704](https://github.com/user-attachments/assets/76cc7d1e-f3ef-45f2-b908-e1151d0df151)

Next, I implemented the view package history function, here a package created can be viewed and it utilizes a package file to determine cost, point value, quantity, and name of the item.  

![Screenshot 2024-05-06 220737](https://github.com/user-attachments/assets/d48a1799-6f7a-430b-92e5-6d99e1144a1d)
![Screenshot 2024-05-06 220752](https://github.com/user-attachments/assets/e77e8a94-c92f-47f1-b646-e28e8cacda6f)

Lastly, I improved the CSS to make the application more visually appealing and intuitive.  

![Screenshot 2024-05-06 220639](https://github.com/user-attachments/assets/2d81193b-fc82-4ea0-852b-b6fbfe32205e)

I was unable to to include an algorithm that searches for potential savings, as well as the ability to add three separate packages.  Overall, I think the project achieved my original goal, and it will reduce the time it takes to create package options.
