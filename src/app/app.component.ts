import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navs = [
    {title: 'Service', href: '#'},
    {title: 'Works', href: '#'},
    {title: 'Products', href: '#'},
    {title: 'Blog', href: '#'},
    {title: 'Hire Us', href: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSf-rF4Xl_MB4IMhAGOhf879AFpKEBqdbnKRsplqzJLIs66kIA/viewform', target: '_blank'}
  ]
  links = [
    {title: 'Fintech'},
    {title: 'Mobile'},
    {title: 'IOT'},
    {title: 'Ecommerce'},
    {title: 'VR'},
    {title: 'AR'},
    {title: 'Blockchain'},
    {title: 'Cloud'},
    {title: 'AI'}
  ]
  aboutHeading = 'About us'
  aboutdata = [
    {title: 'Ready to deliver', content: 'Lets us precisely select the most skilled and appropriate engineers from our curated team in order to build the platform you are looking for.'},
    {title: 'Agile by default', content: 'We love working agile, which means that we will communicate to you our progress every day in order to get your feedback.'},
    {title: 'Cost efficient', content: 'Limited budget and tight deadlines? No problem to deliver, pay per hour, day or milestone. Up to your needs.'},
    {title: 'Cloud Native', content: 'We work with latest tools and frameworks. Scale up your MVP with secure and reliable cloud infrastructure.'}
  ]
  techHeading = 'Tech Stack'
  ourHeading = 'SOME OF OUR LOVELY CLIENTS'
  clients = [
    {img: '../assets/images/intlx-logo.png', href: '#', alt: 'Intelllex'},
    {img: '../assets/images/apex-logo.png', href: '#', alt: 'Apex'},
    {img: '../assets/images/cardup-logo.png', href: '#', alt: 'Cardup'},
    {img: '../assets/images/igrow-logo.png', href: '#', alt: 'iGrow'}
  ]
  clientInfo = 'Sangmok Lee, APEX Defense Translation Inc.'
  clientTag1 = 'Build your project with us!'
  clientTag2 = 'Ready to start TODAY?'
  copyData1 = '2017 &copy All rights reserved LEVR TECH PTE. LTD.'
  copyData2 = '1 Raffles Place #44-02(048616)/120 Robinson Road #15-01 (068913) Singapore'
  socials = [
    {title: 'Facebook', class: 'facebook', href: 'https://www.facebook.com/LEVR-2192375347656056'},
    {title: 'Twitter', class: 'twitter', href: 'https://twitter.com/LevrTech'},
    {title: 'Linkedin', class: 'linkedin', href: 'https://www.linkedin.com/company/13379102'},
    {title: 'Instagram', class: 'instagram', href: 'https://www.instagram.com/levrtech'}
  ]
}
