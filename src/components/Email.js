import React from "react";
import './Email.css';
import CloseIcon from "@material-ui/icons/Close"
import {Button} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {closeSendMessage} from "./mailSlice";


function EMail() {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) =>{
         console.log(formData);
         dispatch(closeSendMessage())
        };
    return(
        <div className="sendMail" >
               <div className="sendMail__header">
                    <h3>New Message </h3>
                   <CloseIcon onClick={()=> dispatch(closeSendMessage())}
                              className="sendMail__close"/>
               </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    {...register("message", {
                        required: "Required",
                      })}
                />
                {errors.to && <p className="sendMail_error">To is required !</p>}
                <input
                    name="from"
                    placeholder="From"
                    type="email"
                    {...register("message", {
                        required: "Required",
                      })}
                />
                {errors.from && <p className="sendMail_error">To is required !</p>}
                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    {...register("message", {
                        required: "Required",
                      })}
                />
                 {errors.subject && <p className="sendMail_error">Subject is required !</p>}
                <input
                    name="message"
                    placeholder="Message..."
                    className="sendMail__message"
                    type="text"
                    {...register("message", {
                        required: "Required",
                      })}
                />
                 {errors.message && <p className="sendMail_error">Message is required !</p>}

                   <div className="sendMail__options">
                        <Button className="sendMail__send"
                                variant="contained"
                                color="primary"
                                type="submit"

                        >Send</Button>
                   </div>
            </form>
        </div>
    )
}

export default EMail;