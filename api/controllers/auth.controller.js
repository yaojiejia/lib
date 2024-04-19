import bcrypt from 'bcrypt';
export const register =  async (req, res) => {      
    const {username, email, password} = req.body;
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    //Create new user and save to DB

}
export const login = (req, res) => {       
}
export const logout = (req, res) => {       
}