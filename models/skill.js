const skills = [
    {skill: 'JavaScript', learned: true},
    {skill: 'HTML/CSS', learned: true},
    {skill: 'Node.js', learned: true},
    {skill: 'Express.js', learned: false}
]

module.exports = {
    getAll,
    getOne,
    deleteOne,
    create
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

function create(skill) {
    skills.push(skill);
}

function deleteOne(id){
    skills.splice(id, 1);
}