import React from 'react';
import { useEffect, useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../../suparbase';
import { UserContext } from '../../context/UserContext';
// import {} from "./NewsfeedStyle";

const Newsfeed = () => {
<<<<<<< HEAD
  
  const [posts,setPosts] = useState([]);

  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(()=> {
    const fetchData = async () => {
      if(user) {
      console.log(user+"여기니?");
      const { data, e } = await supabase.from('postings').select('*');
      if (e) {
        console.log(e);
      } else {
        console.log(data);
        setPosts(data);
      }
    };
  }
    fetchData();
  }, [])


  // console.log(posingData);

  return (
    <div>
      <button onClick={() => {
    navigate('/');
      }}>어서오시개!</button>
      <button onClick={() => {
        navigate('/mypage');
      }}>마이 프로필</button>
   <h1>유저 페이지입니다</h1>
      {posts.map((post) => {
        return (
          <div key= {post.posting_id}style={{ border: '1px solid black', marginBottom: '10px' }}>
            <h5>작성자 : {post.id}</h5>
            <h5>{post.posting_content}</h5>
            <h5>작성일 : {post.writed_at}</h5>
            <h1>제목 : {post.posting_title}</h1>
          </div>
        );
      })} 

   
=======
  // const [id, setId] = useState();

  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   const getNewsfeed = async () => {
  //     // console.log(id);
  //     const { data, e } = await supabase.from('postings').select('*').eq('user_id', id);
  //     if (e) {
  //       console.log(e);
  //     } else {
  //       console.log(data);
  //     }
  //   };
  //   getNewsfeed();
  // }, []);

  return (
    <div>
      {/* <div></div>

      {users.map((user) => {
        return (
          <div key={user.id} style={{ border: '1px solid black', marginBottom: '10px' }}>
            <h5>유저 고유 값 : {user.id}</h5>
            <h5>이름 : {user.name}</h5>
            <h5>사는 곳 : {user.address}</h5>
            <h5>나이 : {user.age}</h5>
          </div>
        );
      })} */}

      <h1>유저 페이지입니다</h1>
>>>>>>> 9076c7563ada7c6967e47aa392133b615b1be0d2
    </div>
  );
};

export default Newsfeed;
