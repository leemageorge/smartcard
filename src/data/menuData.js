import user from "../assets/user.svg";
// import settings from "../assets/settings.svg";
// import documents from "../assets/documents.svg";
// import appointments from "../assets/appointment.svg";
// import history from "../assets/history.svg";
// import help from "../assets/help.svg";
// import logout from "../assets/logout.svg";
import accounts from "../assets/accounts.svg"
import newuser from "../assets/newuser.svg"
import support from "../assets/support.svg"
import getsupport from "../assets/getsupport.svg"

export const menuData = [
    {
        icon: accounts,
        label:'Accounts',
        url:"/accounts"
    },
    
     {
        icon: user,
        label:'User Listing',
        url:"/user-listing"

    },
    {
        icon: newuser,
        label:'New Users',
        url:"/new-users"
    },
    {
        icon: support,
        label:'Support Request',
        url:"/support-request"
    },
  
    {
        icon: getsupport,
        label:'Get Support',
        url:"/get-support"
    },
   
]