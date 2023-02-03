
import axios from 'axios';
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { ChatEngine } from 'react-chat-engine'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const Chat = () => {
    const { user, logOut } = useContext(AuthContext)
    const { loading, setLoading } = useState(true)



    const handLogOut = async () => {
        logOut()

    }


    const getFile = async (url) => {
        const res = await fetch(url)
        const data = res.blob();
        return new File([data], 'userPhoto.jpg', { type: 'image/jpg' })
    }
    useEffect(() => {

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "5531fa61-0986-4365-b610-c1b1bd63a77d",
                "user-name": user?.email,
                "user-secret": user?.uid,
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {

                let formdata = new FormData()
                formdata.append('email', user?.email)
                formdata.append('username', user?.displayName)
                formdata.append('secret', user?.uid)
                getFile(user?.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name)
                        axios.post('https://api.chatengine.io/users', formdata, {
                            headers: { 'private-key': 'a66f84fb-4315-4187-93ee-e14418f03e24' }
                        })
                            .then(() => setLoading(false))
                            .catch((error) => console.log('error', error))
                    })
            })
    }, [user])

    if (!user || loading) return "Loading..."
    return (

        <div className='chat-header text-black'>
            <div className='navbar justify-between bg-slate-800 '>
                <div className=''>
                    <h1>chat</h1>
                </div>

                <div className=''>
                    <Link onClick={handLogOut} className='btn border-1 border-blue-300 rounded-full'><p className=''>logout</p></Link>
                </div>
            </div>
            <ChatEngine
                className='h-16'
                projectID="5531fa61-0986-4365-b610-c1b1bd63a77d"
                userName={user?.email}
                userSecret={user?.uid}
            />
        </div>

    );
};

export default Chat;