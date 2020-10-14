
const fs = require('fs')
const Datas = JSON.parse(fs.readFileSync(`${__dirname}/data/data2.json`))


exports.getnames = (req,res,next)=>{
  res.status(200).json({
      report : true,
      msg : 'viewing all ENTRY',
      TotalEntry : Datas.length,
      data: {
        Datas
    
      }
  })
}



exports.getname = (req,res, next)=>{
  id = req.params.id*1
  file = Datas.find(el => el.id ===id)

 if(!file)
return res.status(404).json({
   report :false,
  msg : 'invalid ENTRY',
 
 })

  res.status(200).json({
      report : true,
      msg :  `viwing a particular ENTRY ${req.params.id}`,
      data: {
        file
      }
  
  })
}

exports.postname = (req,res, next)=>{
   const NewID = Datas[Datas.length -1].id +1
   const newfile = Object.assign({id : NewID}, req.body)

   Datas.push(newfile)

 fs.writeFile(`${__dirname}/data/data2.json`, 
 JSON.stringify(Datas),(err) =>{

    res.status(201).json({
      data: {
        newfile
      }
    })
 })
  
}

exports.putname = (req,res, next)=>{
  res.status(200).json({
      report : true,
      msg : `editing an ENTRY ${req.params.id}`
  })
}

exports.deletename = (req,res, next)=>{
  res.status(200).json({
      report : true,
      msg : `deleting ENTRY ${req.params.id}`
  })
}
