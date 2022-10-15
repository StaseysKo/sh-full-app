import axios from 'axios';


// *********** Send email
export const SendEmail = async ({
    services,
    firstName,
    lastName,
    email,
    phoneNumber,
    city,
    experience,
    budget,
    message
}) => {

    const datas = { services, firstName, lastName, email, phoneNumber, city, experience, budget, message };
    let res = await axios.post(`http://89.108.88.129:5000/send`, datas);

};
