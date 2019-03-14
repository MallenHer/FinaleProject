const express = require('express');
const router = express.Router();
const User = require('../models/User')
const passport = require('passport')
const uploadCloud = require('../helpers/cloudinary');
const Project = require('../models/Project')

//middlewares
function isAuth(req, res, next) {
  console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {    
    next()
  } else {
    res.status(401).json({ message: "Inicia Sesion primero" })
  }
}


//el id
//router.post('/projects/:id', (req,res,next)=>{
//  Project.findByIdAndUpdate(req.params.id, req.body, {new:true})
//  .then(post=>res.redirect('/projects'))
//  .catch(e=>next(e))
//})
//
//router.get('p/detail/:id', (req,res,next)=>{
//  Project.findById(req.params.id)
//  .then(project=>
//    {
//      // console.log(project)
//      res.render('projects/detail', project)})
//  .catch(e=>next(e))
//})


//persons
router.get('/persons', isAuth, (req,res,next) => {
  User.findById(req.user._id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(e => console.log(e))
})



//projects
router.get('/projects', isAuth, (req,res,next) => {
  User.findById(req.user._id)
  .then(user => {
    Project.find({})
    res.status(200).json(user)
  })
  .catch(e => console.log(e))
})

router.get('/allProjects', isAuth, (req, res, next) => {
  Project.find()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(e => res.json(e))
} )


//create projects

router.get('/createnew', isAuth, (req,res,next) => {
  res.status(200).json({
    username:req.user.username,
    pic: req.user.pic
  })
})



//create a project
router.post('/createnew', isAuth,  async (req,res,next) => {
  // Project.register(req.body)
  try{
    let project = await Project.create({...req.body})
    let user = await User.findByIdAndUpdate(req.user._id, { $push: { projects: project._id } }, { new: true } )
    res.status(201).json(project)
    console.log(project)
  }
  catch(e){
    next(e)
  }
})


//profile
router.get('/profile', isAuth ,(req, res, next) => {
  User.findById(req.user._id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(e => console.log(e))
  
  //   {
  //   username: req.user.username,
  //   pic: req.user.pic,
  //   name: req.user.name,
  //   lastname: req.user.lastname,  
  // })
})

router.post('/profile',isAuth, uploadCloud.single('picture'), (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, {pic: req.file.url})
  .then( user => {
    res.status(200).json({ message: "Subido", pic: req.file.url })
  })
  .catch(e => console.log(e))
})

//login
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.status(200).json(req.user)
})

//signup
router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(e => next(e))
})

router.get('/logout',isAuth, (req, res) => {
  req.logout()
  
  req.session.destroy((err) => {
    if(!err) {
      res.status(200).clearCookie('connect.sid', {path: '/'}).json({message: "Sesion terminada"})
    }
  })
})

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
