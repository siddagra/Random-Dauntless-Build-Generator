var hashids = new Hashids.default("spicy", 8, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

function generateRandomBuild() {
	function RandomNum(max) {
		return Math.floor(Math.random() * max);
	}
	function RandomCell(cellSlot) {
		return perkList[cellType.indexOf(cellSlot)][RandomNum(perkList[cellType.indexOf(cellSlot)].length)];
	}
	function fillArmorDBarray(barmor) {
		DBarray.push(barmor.DBmap, 15);
		DBarray.push(RandomCell(barmor.cell).DBmap);
	}
	let DBarray = [3];

	//weapon
	let fweapon = weapon.flat(1);
	let bweapon = fweapon[RandomNum(fweapon.length)];
	DBarray.push(bweapon.DBmap, 15);

	//cells
	DBarray.push(RandomCell(bweapon.cell[0]).DBmap);
	DBarray.push(RandomCell(bweapon.cell[1]).DBmap);
	console.log(DBarray);

	//parts
	DBarray.push(0, 0, 0, 0, 0, 0);

	//armors
	let bhead = head[RandomNum(head.length)];
	fillArmorDBarray(bhead);
	let btorso = torso[RandomNum(torso.length)];
	fillArmorDBarray(btorso);
	let barms = arms[RandomNum(arms.length)];
	fillArmorDBarray(barms);
	let blegs = legs[RandomNum(legs.length)];
	fillArmorDBarray(blegs);

	//lantern
	DBarray.push(RandomNum(8));
	DBarray.push(RandomCell("Utility").DBmap);

	//open random Dauntless Builder build in new tab
	window.open("https://www.dauntless-builder.com/b/" + hashids.encode(DBarray));
}
