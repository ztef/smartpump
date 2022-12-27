/*

    Smartpump Application Server

    ROOT route

    Testing purposes : APP RUNNING

*/



export default async (req, res, next) => {
  
     // return res.status(200).json({SERVER_STATE_RUNNING});
  
     return res.status(200).send("SERVER_STATE_RUNNING");
  
};
