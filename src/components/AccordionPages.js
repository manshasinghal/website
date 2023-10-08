// import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';
import Accordion from "./Accordion";
function AccordionPages() {
  const items = [
    {
         id:'1',
         label:'How Much Will It Cost?',
         content : 'To Get A Better Idea Of The Cost Of What You Want To Build, Give Us A Quick Phone Call. We’ll Ask You A Few Questions About The Nature Of The Site, What Sort Of Interactivity The Site Will Have, Your Graphic Design Needs, Etc. Then We’ll Be Able To Give You A Ballpark Figure. If You’re Still Interested, We’ll Come To Your Place Of Business And Come Up With A Firm Quote.'
    },
    {
      id:'2',
      label:'How Long It Takes To Design?',
      content : 'The Time Limit Of Any Assignment Is Normally Dictated By The Client. If You Have Any Time Limit In Mind We Will Attempt To Assemble It For You. The Main General Delay In The Making Of A Website Is Waiting For The Content Of The Pages To Be Sent To Us By The Client.'
    },
    {
      id:'3',
      label:'How Do I Associate With B2world?',
      content : 'The Process Begins When You Contact Us With Your Requirements. We Analyze Your Requirements And Respond To You. On The Basis Of The Further Discussion, You Can Choose An Engagement Model That Suits You The Best. After That, We Begin The Process Of Development.Feel Free To Call Or Mail Any Time.'
    },
    {
      id:'4',
      label:'Can You Help My Current Site Look More Professional?',
      content : 'Yes. Give Us Your Requirements And We Have Experienced Expertise To Help You Give A New Professional Look That Really A Creative , Unique,Eco-Friendly, Wonders!'
    },
    {
      id:'5',
      label:'When Do I Pay?',
      content : 'For Most Projects, Equal Payments Are Made At The Start, Midway, And The End Of The Project, But We Can Work With You To Set Up A Schedule That Meets Your Needs. We Understand That This Is A Big Investment And Want To Help You Budget For The Expense In Whatever Way Possible. We Accept Checks, UPI, Net Bankig, Debit Cards, Credit Cards, Cash And All Major Payment Facilities.'
    }
  ];

  
  return <Accordion items={items}/>;
}

export default AccordionPages;