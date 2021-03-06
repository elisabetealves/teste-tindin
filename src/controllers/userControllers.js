import User from './models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


//Login User
const login = async (req, res) => {
    const { email, password } = req.body;

    //validations
    if(!email){
        return res.status(422).json({message: 'O email é obrigatório!'});
    }

    if(!password){
        return res.status(422).json({message: 'A senha é obrigatória!'});
    }

    // check if user exists
    const user = await User.findOne({ email: email });

    if(!user){
        return res.status(404).json({message: 'Usiário não encontrado'});
    }

    //check if password match
    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        return res.status(422).json({message: 'Senha inválida'});
    }

    try{
        const secret = process.env.SECRET;

        const token = jwt.sign(
            {
                id: user._id
            },
            secret
        )

        res.status(200).json({message: 'Autenticação realizada com sucesso!', token})

    }catch(error){
        console.log(error)
        res
         .status(500)
         .json({message: 'Aconteceu um erro no servidor, tente novamente mais tarde!',
        });
    }

}

export default login;

