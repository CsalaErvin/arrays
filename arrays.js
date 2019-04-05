/*jslint devel: true */

var shoppingList = ['bread', 'milk', 'apple'];
shoppingList.push('eggs');
shoppingList.push('rice', 'pasta', 'beans');
shoppingList.unshift('chocolate');
shoppingList.unshift('tea');
shoppingList.shift();
shoppingList.push('tea');
shoppingList.pop();
alert(shoppingList);
shoppingList.splice(2, 0, 'chease');

alert(shoppingList[0]);
shoppingList[0] = 'candy';
alert(shoppingList[0]);

shoppingList.splice(4, 1);
shoppingList.splice(4, 3);
alert(shoppingList);

var houses = ['houseArryn', 'houseMormont', 'houseGreyjoy', 'houseClegane', 'houseLannister', 'houseStark', 'houseTyrell', 'houseTargaryen', 'houseBaratheon', 'houseTully'];
alert(houses);

var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
var deletedFromEnd = fibonacci.pop();
alert(fibonacci);

var bucketList = ['writing a novel', 'learn Italian', 'travel to New Zealand', 'diving'];
bucketList.push('seeing the polar light', 'learn to play guitar', 'parachuting');
bucketList.unshift('to become a vegetarian', 'move to France for about 3 months');
bucketList.shift();
alert(bucketList);


var guestList = ['Tomi', 'Lili', 'Balázs', 'Zsuzsi', 'Misi', 'Kati', 'Janka', 'Pali'];
alert(guestList);
guestList[5] = 'Marcsi';
alert(guestList);
								 
