# TODO
 - fix dev container with these:
   ```
   VULKAN_SDK=$PWD/x86_64
   echo export PATH=$PATH:$VULKAN_SDK/bin >> /etc/environment
   echo export VK_LAYER_PATH=$VULKAN_SDK/etc/explicit_layer.d >>
   /etc/environment
   echo $VULKAN_SDK/lib >> /etc/ld.so.conf.d/vulkan.conf
   ldconfig
   ```

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

# basic sequence
* load `libvulkan.so` or `vulkan-1.dll`
* this must export at least: `vkGetInstanceProcAddr()`
* and if i got it right there are 4 categories("levels") of functions:
  - VK_EXPORTED_FUNCTION
  - VK_GLOBAL_LEVEL_FUNCTION   => Vulkan Instance
  - VK_INSTANCE_LEVEL_FUNCTION => Vulkan capable hw and vulkan features exposed
  - VK_DEVICE_LEVEL_FUNCTION   => the rest
* Global Level Functions (null/no-instance level functions)
  - vkCreateInstance()
  - vkEnumerateInstanceExtensionProperties()
  - vkEnumerateInstanceLayerProperties()
* Instance Level Functions (operate on physical devices to create logical device)
  - vkEnumeratePhysicalDevices()
  - vkGetPhysicalDeviceProperties()
  - vkGetPhysicalDeviceFeatures()
  - vkGetPhysicalDeviceQueueFamilyProperties()
  - vkCreateDevice()
  - vkGetDeviceProcAddr
  - vkDestroyInstance
* Device Level Functions (require logical device, first param is: VkDevice, VkQueue or VkCommandBuffer)
  - vkGetDeviceQueue()
  - vkDestroyDevice()
  - vkDeviceWaitIdle()
* Swap Chain (ie ~framebuffer)

# basic sequence (structure)
  * VkInstance : Vulkan Instance a vulkan implementation/driver?
    - VkResult VkCreateInstance(& VkInstanceCreateInfo <- VkApplicationInfo, nullptr, VkInstance& )
    - CHECK_VULKAN_RESULT(result)
  * VkPhysicalDevice : Physical Device eg a GPU
    - vkEnumeratePhysicalDevices
    - VkPhysicalDevice* phy_dev = new VkPhysicalDevice[count]
    - vkEnumeratePhysicalDevices(instance, &count, phy_dev)
    - -vkEnumerateDeviceExtensionProperties(phy_dev, ...)

  * VkDevice : Logical Device (piece of sw that runs on a physical device)    - vkGetPhysicalDeviceProperties(phy_dev,  ...)
    - VkDeviceQueueCreateInfo{}
    - VkDeviceCreateInfo{}
    - VkDevice dev
    - VkResult = vkCreateDevice(phy_dev, &VkDeviceCreateInfo, nullptr, &dev)




