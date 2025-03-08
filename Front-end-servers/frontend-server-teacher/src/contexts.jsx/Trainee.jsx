import React , {useEffect , useContext , createContext , useState} from 'react'

export const curr_context = createContext();

export default function Trainee(props) {
   const backend_url = "http://localhost:7000"
   const [traineeID , set_traineeID] = useState("666e1fbb59ee8810d3a8b04f")
   useEffect(()=>{console.log(traineeID)} , [traineeID])


   const [trainee , set_trainee] = useState({
    
      name: 'samrth rathore',
      emailId: 'samrathrathore@gmail.com',
      photoURL: 'https://media.licdn.com/dms/image/D5603AQHdw9-ZFL68sQ/profile-displayphoto-shrink_200_200/0/1709324667754?e=2147483647&v=beta&t=3dxI0molE4fXPcBSji2qbAMksr-ga35f__HkZFKzo_U',
   
   }) ; 

   useEffect(()=>{
     

      const get_data = async()=>{
         if(traineeID){

            const url = backend_url + "/trainee"+"/get_trainee_info/" + traineeID
            await fetch(url, {
               method: 'GET',
               headers: {
                   'Cache-Control': 'no-cache, no-store, must-revalidate', 
                   'Pragma': 'no-cache',
                   'Expires': '0'
               }
           })
           .then(res => res.json())
           .then(res => set_trainee(res))
           .catch(error => console.error('Error:', error));
         }
      } 
       get_data() ; 
   } , [traineeID])

   useEffect(() => {
      console.log(trainee);
    }, [trainee]);


   return (
      <>
        <curr_context.Provider value={{traineeID , set_traineeID ,trainee , set_trainee , backend_url}}>
          {props.children}
        </curr_context.Provider>
      </>
    );
  }

