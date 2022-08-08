import User from "../models/UserModel.js";
import path from "path";

export const getUsers = async(req,res)=>{
    try{
        const response =await User.findAll();
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
    
}

export const getUsersById = async(req,res)=>{
    try{
        const response =await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
    
}

export const saveUsers = async(req,res)=>{
    if(req.files === null) return res.status(400).json({msg:"No File Uploaded"});
    const name = req.body.owner;
    const email = req.body.email;
    const phone = req.body.phone;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:"Invalid Image"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/image/${fileName}`,async(err)=>{
        if(err) return res.status(500).json({msg:err.message});
        try {
            await User.create({name:name,email:email,Phone:phone,image:fileName,url:url});
            res.status(201).json({msg:"Berhasil"});
        } catch (error) {
            console.log(error.message);
        }
    })
    

}