'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  message: string;
  agreeToTerms: boolean;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("subject"),
  message: yup.string().required().label("Message"),
  agreeToTerms: yup.boolean().oneOf([true], "You must agree to the terms and conditions").required(),
});

// prop type 
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>Name</label>
        <input id='name' {...register("name")} type="text" placeholder="John Doe" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Subject</label>
        <input id='subject' {...register("subject")} type="text" placeholder="Your@email.com" />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Message</label>
        <textarea id='message' {...register("message")} placeholder="Tell Us About Your Project"></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <div className="cn-contactform-checkbox">
          <input 
            id='agreeToTerms' 
            type="checkbox" 
            {...register("agreeToTerms")} 
          />
          <label htmlFor="agreeToTerms">
            I agree to the{" "}
            <a href="/terms-and-conditions" target="_blank" className="text-primary">
              Terms & Conditions
            </a>
            ,{" "}
            <a href="/privacy-policy" target="_blank" className="text-primary">
              Privacy Policy
            </a>
            , and{" "}
            <a href="/cookies-policy" target="_blank" className="text-primary">
              Cookies Policy
            </a>
          </label>
        </div>
        <ErrorMsg msg={errors.agreeToTerms?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
}
