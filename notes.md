# Basics
## installation
* deban deps:
  - sudo apt install vulkan-tools libvulkan-dev vulkan-validationlayers-dev spirv-tools
  - lunarg sdk is not in the repos, down + install manually
## Consepts
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
