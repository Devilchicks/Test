import Akun from "../models/AkunModel.js";
import path from "path";

export const getAkun = async(req,res)=>{
    try{
        const response =await Akun.findAll();
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
    
}

export const getAkunById = async(req,res)=>{
    try{
        const response =await Akun.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
    
}

export const saveAkun = async(req,res)=>{
    const akun = req.body.akun;
    const phoneakun = req.body.phoneakun;


        try {
            await Akun.create({akun:akun,phoneakun:phoneakun});
            res.status(201).json({msg:"Berhasil"});
        } catch (error) {
            console.log(error.message);
        }

    

}