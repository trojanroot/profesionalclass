function main(){
    const [results,setResults]=userState([]);
const [loading,setLoading]=useState(false);

const searchUsers=async(searchTerm)=>{
    try{
        const response=await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const data=await response.json();
        const filtered=data.filter(user=>
            user.name.toLowercase().includes(searchTerm.toLowercase())
        );
        setResults(filtered);
    }catch(err){
        console.error("search error:",err);
    }finally{
        setLoading(false);
    }
    };
    searchUsers();
    console.log(results)

    return(
        <>

                    
        </>
    )
}