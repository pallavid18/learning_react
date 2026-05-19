const UserCard =()=>{

    const user ={
        name:"Pallavi Dhope",
        city:"Pune",
        profession:"Software Engineer"
    };

    const user1 ={
        name:"Disha Kute",
        city:"Mumbai",
        profession:"Data Scientist"
    }
    
    const user2 ={
        name:"Pratiksha Kathavate",
        city:"Solapur",
        profession:"Java Developer"
    }

    const employee ={
        name:"Sharvani Gudekar",
        department :"IT",
        address :{
        city :"Kokan",
        pincode : 411033
        }
    }

    const employee1 ={
        name :"Poornima Duttargi",
        department :"Computer",
        address :{
            city :"Bangalore",
            pincode : 560001
        }
    }

    const products =[
        {
            id:101,
            name:"Laptop",
            price:50000,
            specification:{
                processor:"i5",
                ram:"8GB",
                storage:"512GB SSD"
            }
        },

        {
            id:102,
            name:"Mobile",
            price:20000,
            specification:{
                processor:"Snapdragon 888",
                ram:"6GB",
                storage:"128GB"
            }
        },
        {
            id:103,
            name:"Tablet",
            price:30000,
            specification:{
                processor:"Apple A14 Bionic",
                ram:"4GB",
                storage:"256GB"
            }
        },

        {
            id:104,
            name:"Smartwatch",
            price:15000,
            specification:{
                processor:"Exynos W920",
                ram:"1GB",
                storage:"16GB"
            }
        },

        {
            id:105,
            name:"Headphones",
            price:8000,
            specification:{
                processor:"Qualcomm QCC5124",
                ram:"512MB",
                storage:"N/A"
            }
        }

    ]

    return(
        <>
        <div className="container border border-rounded border-primary p-3">
            <h2>User Details Object Example </h2>
            <hr/>
            <p><b>Name : </b>{user.name}</p>
            <p><b>City : </b>{user.city}</p>
            <p><b>Profession : </b>{user.profession}</p>
            <hr/>
            <p><b>Name : </b>{user1.name}</p>
            <p><b>City : </b>{user1.city}</p>
            <p><b>Profession : </b>{user1.profession}</p>
            <hr/>
            <p><b>Name :</b>{user2.name}</p>
            <p><b>City :</b>{user2.city}</p>
            <p><b>Profession :</b>{user2.profession}</p>
        </div>

        <div className="container border-primary border border-rounded p-3 mt-3">
            <h2>User Details Nested Object Example</h2>
            <hr/>
            <p><b>Name :</b>{employee.name}</p>
            <p><b>Department : </b>{employee.department}</p>
            <p><b>City : </b>{employee.address.city}</p>
            <p><b>Pincode : </b>{employee.address.pincode}</p>
            <hr/>
            <p><b>Name :</b>{employee1.name}</p>
            <p><b>Department : </b>{employee1.department}</p>
            <p><b>City : </b>{employee1.address.city}</p>
            <p><b>Pincode : </b>{employee1.address.pincode}</p>
        </div>

        <div className="container border-primary border border-rounded p-3 mt-3 mb-5">
            <h2>Product Details Array of Object Example</h2>
            <p>Complex object in array example</p>
            <hr/>
            {products.map((p)=>(
                <div key={p.id} className="border border-secondary border-rounded p-2 mb-2">
                    <h3>{p.name}</h3>
                    <p><b>Price : </b>{p.price}</p>
                    <p><b>Processor : </b>{p.specification.processor}</p>
                    <p><b>RAM : </b>{p.specification.ram}</p>
                    <p><b>Storage : </b>{p.specification.storage}</p>
                </div>
            ))}

        </div>

        </>
    )
};
export default UserCard;