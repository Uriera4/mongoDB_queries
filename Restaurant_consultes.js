db.restaurants.find({}).sort({ name: 1 })
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, 'address.zipcode': 1, _id: 0 })
db.restaurants.find({ borough: 'Bronx' })
db.restaurants.find({ borough: 'Bronx' }).limit( 5 )
db.restaurants.find({ borough: 'Bronx' }).skip( 5 ).limit( 5 )
db.restaurants.find({ grades: { $elemMatch: { score: { $gt: 90 }}}})
db.restaurants.find({ grades: { $elemMatch: { score: { $gt: 80, $lt: 100 }}}})
db.restaurants.find({ 'address.coord': { $lt: -95.754168 }})
db.restaurants.find({ $and: [{ cuisine: { $ne: 'American ' }}, { grades: { $elemMatch: { score: { $gt: 70 }}}}, { 'address.coord': { $lt: -65.754168 }}] })
db.restaurants.find({ cuisine: { $ne: 'American ' }, grades: { $elemMatch: { score: { $gt: 70 }}},  'address.coord': { $lt: -65.754168 } })
db.restaurants.find({ cuisine: { $ne: 'American ' }, grades: { $elemMatch: { grade: 'A' }}, borough: { $ne: 'Brooklyn' }}).sort({ cuisine: 1 })
db.restaurants.find({ name: /^Wil/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
db.restaurants.find({ name: /ces$/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
db.restaurants.find({ name: /Reg/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
db.restaurants.find({ borough: 'Bronx', $or: [{ cuisine: 'American ' }, { cuisine: 'Chinese' }] })
db.restaurants.find({ borough: { $in: [ 'Staten Island', 'Queens', 'Bronx', 'Brooklyn' ] }})
db.restaurants.find({ borough: { $nin: [ 'Staten Island', 'Queens', 'Bronx', 'Brooklyn' ] }})
db.restaurants.find({ 'grades.score': { $lte: 10 }}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
db.restaurants.find({ $or: [{ cuisine: { $nin: ['American', 'Chinese'] }}, { name: /^Wil/ }]}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
db.restaurants.find({ grades: { $elemMatch: { grade: 'A', score: 11, date: ISODate('2014-08-11T00:00:00.000Z') }}}, { restaurant_id: 1, name: 1, grades: 1 })
db.restaurants.find({ 'grades.1.grade': 'A', 'grades.1.score': 9, 'grades.1.date': ISODate('2014-08-11T00:00:00.000Z') }, { restaurant_id: 1, name: 1, grades: 1 })
db.restaurants.find({ 'address.coord.1': { $gt: 42, $lte: 52 } }, { restaurant_id: 1, name: 1, 'address.coord': 1 })
db.restaurants.find({}).sort({ name: 1 })
db.restaurants.find({}).sort({ name: -1 })
db.restaurants.find({}).sort({ borough: -1, name: 1 })
db.restaurants.find({ 'address.street': { $exists: null } }, { address: 1 })
db.restaurants.find({ 'address.coord': { $type: 'double' } })
db.restaurants.find({ 'grades.score': { $mod: [7, 0] } }, { restaurant_id: 1, name: 1, 'grades.grade': 1 })
db.restaurants.find({ name: /mon/ }, { name: 1, borough: 1, 'address.coord': 1, cuisine: 1 })
db.restaurants.find({ name: /^Mad/ }, { name: 1, borough: 1, 'address.coord': 1, cuisine: 1 })