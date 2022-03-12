
import User from '../model/user-schema.js';

export const getUsers = async (request, response) => {
    try {
        let user = await newUser.find();
        response.json(user);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        response.json(newUser
        );
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const getUsersById = async (request, response) => {
    const id = request.params.id;
    try {
        const user = await User.findById(id);
        response.json(user);
    } catch (error) {
        response.error({ message: error.message });
    }
}

export const editUser = async (request, response) => {
    const user = request.body;
    const editUser = new User(user);

    try {
        await User.updateOne({ id: request.params.id }, editUser);
        response.json(editUser);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({ id: request.params.id });
        response.json("User Deleted Successfully");
    } catch (error) {
        response.json({ message: error.message });
    }
}

