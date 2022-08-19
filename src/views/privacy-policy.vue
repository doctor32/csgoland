<template>
<main>
        <div class="container">
            <p class="title uppercase py-10">privacy policy</p>
            <div class="privacy-poclicy__body">
                <div class="privacy-poclicy">
                    <h1>We provide this Privacy Policy to inform you of our policies and procedures regarding the collection, 
                    use and disclosure of personal data and other information that we receive from users. Before using the site, the User must carefully read this document. The Privacy Policy affects the rights of the user 
                    and imposes certain obligations.</h1>
                    <br>
                
                
                    <p>This document describes what data we collect, store and use.</p>
                    <br><br>
                    <h2>1. PERSONAL IDENTIFICATION INFORMATION:</h2><br>
                
                    1.1 We can collect personal identification information from Users in various ways, including, but 
                    not limited to, when users visit our site, register on the site by logging in via Steam, and also in 
                    connection with other actions, functions or resources that we make available on our site.
                    <br>
                    1.2 Our website may collect personal data such as: <br>
                    a. Contact information such as name, home address and email address.<br>
                    b. Financial information, such as bank account numbers, bank statement trade information and other information that is necessary for transferring funds to the User.<br>
                    c. Identification information, such as images of an identity document issued by a state. <br>
                    d. Information for checking the place of residence.<br>
                    <br>
                    2. INFORMATION GATHERED (COLLECTED)<br><br>
                    1.1 When you enter our site, we collect information that your computer, mobile phone or any other device sends to us. This information includes:<br>
                    a. Your IP-Address;<br>
                    b. Your operating system;<br>
                    c. Information about your browser;<br>
                    d. Traffic Information;<br>
                    e. Web-Browser Cookies.<br>
                    2.1 Our website may use «cookies» to improve user interaction:<br>
                    Cookies are small text files that transfer websites to your computer that you visit. They are 
                    used to make the site work or be more effective, as well as to provide better and more personalized services.
                
                
                    <br><br>
                    3. STORAGE AND TRANSMISSION OF INFORMATION<br><br>
                    3.1.The website reserves the right to store information, including Personal Data, collected in accordance with paragraph 1.2 of the Privacy Policy, for a period of up to 3 years.<br>
                    3.2. We uses standard security measures in relation to the loss, misuse or alteration of such  information. However, the Site cannot guarantee the complete invulnerability of the security system from illegal actions of third parties, and the User should not respond to any claims in 
                    relation to any damage caused by illegal actions of third parties.<br>
                    3.3. The website transfers information to payment systems for transferring funds to the User.<br>
                    3.4. Site may use your information to contact you about news, updates, promotions and new services.<br>
                    3.5. We will not transfer your personal data to other users of the site or to third parties, other than those listed in this document, without notifying you in advance. We will not sell or rent your personal data to third parties other than those listed in this document without first notifying you.<br><br>
                    4. CHANGES TO THE PRIVACY POLICY<br><br>
                    4.1. The website has the right to add, modify, update or modify the Privacy Policy. Any such 
                    change, update or modification takes effect, as soon as they are published on the website, and 
                    the User acknowledges that continued use of the website is an independent and appropriate 
                    solution to ensure the implementation of such a change. If any changes to the Privacy Policy 
                    are unacceptable to the User, the User is obliged to immediately stop using the website
                </div>
                </div>
            </div>
    </main>
</template>

<script>
        export default {
                mounted() {
                        document.title = this.$store.state.domainName + ' — Privacy Policy'
                }
        }
</script>

<style lang="scss">
.other-page__title {
    padding: 5rem 0;
}
.privacy-poclicy__body {
    background: #1E1E1E;
    border-radius: 1.5rem;
    padding: 3rem ;
    margin-bottom: 7rem;
    
    h1 {
        color: rgb(166, 166, 166);
        font-size: 1.4rem;
        text-align: center;
        line-height: 150%;
    }
    .title_policy {
        font-size: 2rem;
        text-transform: uppercase;
        padding-top: 5rem;
        &:first-child{
            padding-top: 0;
        }
    }
}
.privacy-poclicy {
    p {
        padding-top: 3rem;
    }
    font-size: 1.4rem;
    color: white;
    line-height: 150%;
}
</style>