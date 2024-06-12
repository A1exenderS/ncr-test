import fs from 'fs';

interface UserData {
    firstName: string;
    lastName: string;
    userName: string;
    description: string;
    address: string;
    secondAddress: string;
    age: string; // Можливо, варто змінити на number
    password: string;
}

export function getUserData() {
    const filePath = './test-data.json';
    const rawData = fs.readFileSync(filePath);
    const jsonData = JSON.parse(rawData.toString());

    return {
        validUserData: jsonData.validUserData as UserData,
    };
}