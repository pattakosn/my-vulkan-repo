# Basics

## cscope
  find . -name '*.c' -o -name '*.cpp' -o -name '*.h' -o -name '*.hpp' > cscope.files
  cscope -b -q -k -i cscope.files
## installation
* deban deps:
  - sudo apt install vulkan-tools libvulkan-dev vulkan-validationlayers-dev spirv-tools
  - lunarg sdk is not in the repos, down + install manually

## Concepts
    * VkInstance -> VkPhysicalDevice (vkGetPhysicalDeviceProperties, vkGetPhysicalDeviceFeatures) -> VkDevice (aka GL context or D3D11 device)
      eg vkCreateInstance() -> vkEnumeratePhysicalDevices() -> vkCreateDevice()
    * VkImage, VkBuffer
      - image usage declared at creation time
      - VkImageView to use an image. buffers used directly unless as texel buffer in texture -> VkBufferView
    * Memory allocation 
      - vkGetPhysicalDeviceMemoryProperties() vkAllocateMemory() VkDeviceMemory CPU/GPU side, coherent, cached/uncached/etc
      - vkMapMemory()/vkUnmapMemory()
    * Memory Binding
      - vkGetBufferMemoryRequirements or vkGetImageMemoryRequirements
      - bufferImageGranularity:  a minimum separation required between memory used for a VkImage and memory used for a VkBuffer in the same VkDeviceMemory
      - vkBindBufferMemory/vkBindImageMemory
    * Command Buffers
      - VkCommandBuffer <- VkCommandPool (1/thread) vkAllocateCommandBuffers() / vkFreeCommandBuffers()
      - submit to VkQueue vkQueueSubmit()
    * Shaders Pipeline state objs
      - VkPipeline vkCreateGraphicsPipelines(), VkCreateGraphicsPipelines
      - VkPipelineCache vkGetPipelineCacheData()
      - shaders are SPIR-V VkShaderModule from a SPIR-V module can contain multiple entry points, specify which at pipeline creation time
      - reference compiler: glslang or LLVM-> SPIR-V
    * Binding
      - VkDescriptorSet VkDescriptorSetLayout VkDescriptorSet VkDescriptorSets VkDescriptorPool
    * Syncronisation
      - most tricky: missing sync might not break sth
      - VkQueue not thread safe
      - record/submit commands not safe
      - VkEvent, VkSemaphore VkFence for efficient CPU-GPU and GPU-CPU sync
      - pipeline barriers VkMemoryBarrier, VkBufferMemoryBarrier VkImageMemoryBarrier
    * Render passes
      - VkRenderpass
      - VkFramebuffer, VkImageViews
    * backbuffers presentation
      - VkSurfaceKHR, VkSwapchainKHR, vkGetSwapchainImagesKHR VkImage/VkImageView
      - call vkAcquireNextImageKHR to render to one of the img in the swapchain
      - vkWueuePresentKHR with same idx to present
