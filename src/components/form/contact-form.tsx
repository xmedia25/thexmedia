'use client'
import React from 'react';
import Script from 'next/script';

// prop type 
type IProps = {
  btnCls?:string;
}

export default function ContactForm({btnCls=''}:IProps) {
  return (
    <div className="cn-contactform-input" style={{ width: "100%", minHeight: "794px" }}>
      <iframe
        src="https://crm.thexmedia.com/widget/form/j4WsoibuvXdCASHm7siz"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
        id="inline-j4WsoibuvXdCASHm7siz" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Us"
        data-height="794"
        data-layout-iframe-id="inline-j4WsoibuvXdCASHm7siz"
        data-form-id="j4WsoibuvXdCASHm7siz"
        title="Contact Us"
      >
      </iframe>
      <Script src="https://crm.thexmedia.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
