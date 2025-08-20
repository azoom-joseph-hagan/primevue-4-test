<template>
  <div class="container">
    <h1>PrimeVue 4</h1>
    <Button label="Test" @click="visible = true" />
    
    <Drawer v-model:visible="visible" :showCloseIcon="false" position="bottom" style="height: 70vh" class="custom-drawer">
      <template #header>
        <h3>Bottom Drawer with Scrolling Content</h3>
        <Button @click="visible = false" icon="pi pi-times"  variant="text" rounded />
      </template>
      
      <div class="drawer-layout">
        <ScrollPanel class="scroll-content">
          <div class="drawer-content">
            <h4>Section 1: Introduction</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <h4>Section 2: Features</h4>
            <ul>
              <li>Feature 1: Advanced functionality with comprehensive support</li>
              <li>Feature 2: User-friendly interface with intuitive design</li>
              <li>Feature 3: Cross-platform compatibility</li>
              <li>Feature 4: Real-time synchronization</li>
              <li>Feature 5: Secure data encryption</li>
              <li>Feature 6: Customizable themes and layouts</li>
              <li>Feature 7: API integration capabilities</li>
              <li>Feature 8: Advanced analytics and reporting</li>
            </ul>
            
            <h4>Section 3: Technical Details</h4>
            <p>This application is built using modern web technologies including Vue 3, Nuxt 3, and PrimeVue 4. The architecture follows best practices for scalability and maintainability.</p>
            <p>The component library provides a comprehensive set of UI elements that are fully customizable and accessible. Each component is designed with performance in mind and follows modern design principles.</p>
            
            <h4>Section 4: Getting Started</h4>
            <ol>
              <li>Install the required dependencies using your preferred package manager</li>
              <li>Configure the application settings according to your needs</li>
              <li>Set up the database connection and environment variables</li>
              <li>Run the development server to start building your application</li>
              <li>Follow the documentation for detailed implementation guides</li>
            </ol>
            
            <h4>Section 5: Advanced Configuration</h4>
            <p>For advanced users, there are numerous configuration options available to customize the behavior and appearance of the application. These include theme customization, component overrides, and plugin integration.</p>
            <p>The configuration system is flexible and allows for both global and component-level settings. You can also create custom themes and extend the existing functionality with your own plugins.</p>
            
            <h4>Section 6: Best Practices</h4>
            <p>When working with this framework, it's important to follow established best practices for code organization, component structure, and state management. This ensures your application remains maintainable and scalable as it grows.</p>
            <p>Consider implementing proper error handling, testing strategies, and documentation practices from the beginning of your project. This will save time and effort in the long run.</p>
            
            <h4>Section 7: Performance Optimization</h4>
            <p>Performance is a critical aspect of any web application. This framework provides several tools and techniques for optimizing your application's performance, including lazy loading, code splitting, and efficient state management.</p>
            <p>Regular performance auditing and optimization should be part of your development workflow to ensure the best user experience possible.</p>
            
            <h4>Section 8: Community and Support</h4>
            <p>The community around this framework is vibrant and supportive. There are numerous resources available including documentation, tutorials, forums, and community-contributed plugins and themes.</p>
            <p>Don't hesitate to reach out to the community for help with specific issues or to share your own contributions and experiences.</p>
          </div>
        </ScrollPanel>
        
        <div class="action-buttons">
          <Button label="Close" @click="visible = false" />
        </div>
      </div>
    </Drawer>
  </div>
</template>

<script setup>
const visible = ref(false)
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.drawer-content {
  padding: 1rem;
}

.drawer-content h4 {
  color: #2c3e50;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.drawer-content p {
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.6;
  text-align: left;
}

.drawer-content ul,
.drawer-content ol {
  text-align: left;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.drawer-content li {
  margin-bottom: 0.5rem;
  color: #555;
  line-height: 1.5;
}

.custom-drawer :deep(.p-drawer-content) {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.drawer-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scroll-content {
  flex: 1;
  width: 100%;
  min-height: 0;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  border-top: 1px solid #eee;
  background: white;
  flex-shrink: 0;
}
</style>