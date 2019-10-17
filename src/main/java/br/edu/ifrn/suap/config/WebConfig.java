package br.edu.ifrn.suap.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * WebConfig
 */
@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
 
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
          .addResourceHandler("/webjars/**")
          .addResourceLocations("/webjars/");
          
          registry
          .addResourceHandler("/js/**")
          .addResourceLocations("classpath:/static/js/");

          registry
          .addResourceHandler("/css/**")
          .addResourceLocations("classpath:/static/css/");
          
    }
}