export const fetchPincodeDetails = async(pincode)=>{
    if(!pincode || pincode.length !== 6) return null;

    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
    const data = await res.json()

    if(data[0].Status )

}