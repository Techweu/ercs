import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServicesComponent } from './component/services/services.component';
import { QualityControlOrdersComponent } from './component/quality-control-orders/quality-control-orders.component';
import { QcosDetailsComponent} from './component/qcos-details/qcos-details.component';
import { ArticlesComponent } from './component/articles/articles.component';
import {ArticleDetailsComponent} from './component/article-details/article-details.component';
import { AuditsComponent } from './component/audits/audits.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogDetailsComponent } from './component/blog-details/blog-details.component';
import { ImageGalleryComponent } from './component/image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './component/video-gallery/video-gallery.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './component/terms-and-conditions/terms-and-conditions.component';
import { RefundsAndCancellationComponent } from './component/refunds-and-cancellation/refunds-and-cancellation.component';
import { DisclaimerComponent } from './component/disclaimer/disclaimer.component';
import { CareerComponent } from './component/career/career.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import {ServiceDetailsComponent} from './component/service-details/service-details.component';
import{ProductCategoryComponent} from './component/product-category/product-category.component';
import{ProductDetailsComponent} from './component/product-details/product-details.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'services', component:ServicesComponent},
    {path:'services/:slug', component:ServiceDetailsComponent},
    {path:'quality-control-orders', component:QualityControlOrdersComponent},
    {path:'quality-control-orders/:slug', component:QcosDetailsComponent},
    {path:'articles', component:ArticlesComponent},
    {path:'articles-category/:id/:slug',component:ArticlesComponent},
    {path:'articles/:slug', component:ArticleDetailsComponent},
    {path:'audits', component:AuditsComponent},
    {path:'blog', component:BlogComponent},
    {path:'blog/:slug', component:BlogDetailsComponent},
    {path:'image-gallery', component:ImageGalleryComponent},
    {path:'video-gallery', component:VideoGalleryComponent},
    {path:'privacy-policy', component:PrivacyPolicyComponent},
    {path:'terms-and-conditions', component:TermsAndConditionsComponent},
    {path:'refunds-and-cancellation', component:RefundsAndCancellationComponent},
    {path:'disclaimer', component:DisclaimerComponent},
    {path:'career', component:CareerComponent},
    {path:'testimonials', component:TestimonialsComponent},
    {path:'feedback', component:FeedbackComponent},
    {path:'products-category/:slug', component:ProductCategoryComponent},
    {path:'products/:slug', component:ProductDetailsComponent},
    
    
];
