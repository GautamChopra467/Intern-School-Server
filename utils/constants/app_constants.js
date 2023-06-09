
module.exports = {
    ROUTES:{
        AUTH:{
            SIGNUP:"/signup",
            LOGIN:"/login",
            VERIFYEMAIL:"/verifyemail",
            VERIFYOTP:"/verifyOtp",
            STUDENT:'/student',
            COMPANY:'/company',
            ADMIN:'/checkadmin',
            NEWPASSWORD:'/newpassword',
            USERDETAILS:'/userDetails/:id'
        },
        COMPANY:{
            REGISTER:'/register',
            GETCOMPANYINFO:'/getcompanyinfo/:id',
            POSTCOMPANYDETAILS:'/companydetails/:id',
            GETCOMPANYDETAILS:'/getcompanydetails/:id',
            ADDINTERNSHIPS:'/addinternships/:id',
            EDITPROFILE:'/editprofile/:id',
            EDITACCOUNT:'/editaccount/:id',
            GETINTERNSHIPS:'/getinternships/:id',
            INTERNSHIP:'/internship/:id',
            SINGLEINTERNSHIP:'/singleinternship/:id',
            EDITINTERNSHIP:'/editinternships/:id',
            CLOSEINTERNSHIP:'/closeinternship/:id',
            ALLINTERNSHIP:'/allinternships/:id',
            APPLICATIONS:'/application/:id',
            REJECTEDAPPLICANTS:'/rejectedapplicants/:id'
        },
        STUDENT:{
            PROFILE:{
                PROFILE_DETAIL:'/profile/:id',
                PROFILEHEALTH:'/profilehealth/:id',
                EDIT_PROFILE:'/editprofiledetails/:id'
            },
            ACHIEVEMENTS:{
               POST_ACHIEVEMENT:'/achievements/:id',
               GET_ACHIEVEMENT:'/getachievements/:id',
               DELETE_ACHIEVEMENT:'/deleteachievement/:u_id/:id',
               UPDATE_ACHIEVEMENT:'/updateachievement/:u_id/:id',
               UPDATED_ACHIEVEMENT:'/updatedachievement/:u_id/:id'
            },
            PROJECTS:{
                POST_PROJECT:'/projects/:id',
                GET_PROJECT:'/getprojects/:id',
                DELETE_PROJECT:'/deleteproject/:u_id/:id',
                UPDATE_PROJECT:'/updateproject/:u_id/:id',
                UPDATED_PROJECT:'/updatedproject/:u_id/:id'
            },
            EDUCATIONS:{
                POST_EDUCATION:'/education/:id',
                GET_EDUCATION:'/geteducation/:id',
                DELETE_EDUCATION:'/deleteeducation/:u_id/:id',
                UPDATE_EDUCATION:'/updateeducation/:u_id/:id',
                UPDATED_EDUCATION:'/updatededucation/:u_id/:id'
            },
            WORKEXPERIENCE:{
                POST_WORKEXPERIENCE:'/workexperience/:id',
                GET_WORKEXPERIENCE:'/getworkexperience/:id',
                DELETE_WORKEXPERIENCE:'/deleteworkexperience/:u_id/:id',
                UPDATE_WORKEXPERIENCE:'/updateworkexperience/:u_id/:id',
                UPDATED_WORKEXPERIENCE:'/updatedworkexperience/:u_id/:id'

            },
            DETAILSONE:{
               DETAILS:'/detailsone/:id'
            },
            INTERNSHIPS:{
                APPLIED:'/appliedinternship/:id',
                GET_APPLIED:'/getappliedinternship/:id'
            }
        },
        INTERNSHIP:{
            REPORT:"/report/:i_id/:id"
        },
        ADMIN:{
            ADMINREGISTER:"/register"
        }
    },
    LOG :{
        LOGGER :{
            MORGAN_TYPE :':method :url :res[content-length] - :response-time ms :date[web]'
        }
    },
    ROUTE_PATH:{
        AUTH : "/" ,
        STUDENT :"/student",
        COMPANY :"/company",
        INTERNSHIP : "/internhship",
        ADMIN : "/admin" 
    }
}