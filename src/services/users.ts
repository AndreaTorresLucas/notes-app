import { User } from '../types/types';
import axiosAuth from '../utils/axiosAuth';


const getUsers = async (): Promise<User[]> => {
  const { data } = await axiosAuth.get<User[]>('/users');
  return data;
};

const getUserById = async (id: number): Promise<User> => {
    const { data } = await axiosAuth.get(`/users/${id}`);
    return data;
};

const createUser = async (user: User): Promise<User> => {
    const { data } = await axiosAuth.post('/users', user);
    return data;
};

const updateUser = async (id: number, user: User): Promise<User> => {
    const { data } = await axiosAuth.put(`/users/${id}`, user);
    return data;
};

const deleteUser = async (id: number): Promise<void> => {
    await axiosAuth.delete(`/users/${id}`);
};

export default { getUsers, getUserById, createUser, updateUser, deleteUser };