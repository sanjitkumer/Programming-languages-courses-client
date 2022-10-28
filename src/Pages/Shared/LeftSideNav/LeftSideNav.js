import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LeftSideNav = () => {
    const[categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://programming-languages-server-phi.vercel.app/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])

    const {providerLogin,gitLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))

    }
    const handleGitSignIn = () =>{
        gitLogin()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))

    }

    return (        
        <div>
            <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary' > <FaGoogle> </FaGoogle>  Login With Google</Button>
                <Button onClick={handleGitSignIn} className='mb-2' variant='outline-primary'><FaGithub> </FaGithub>   Login with Github</Button>
            </ButtonGroup>
            </div>
            <h4>All category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/allCourses/${category.id}`} >{category.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;