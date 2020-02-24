let Skill = require('../models/skill');


module.exports = {
    index,
    show,
    create,
    new: newSkill,
    delete: deleteSkill
};

function index(req, res){
        res.render('skills/index', {
            skills: Skill.getAll()
        })
    };

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
};

function create(req, res) {
    req.body.learned = false;
    Skill.create(req.body);
    res.redirect('/skills');
};

function newSkill(req, res) {
    res.render('skills/new')
};
