#include "vulkan_functions.h"
#include "vulkan_base.h"
#include <stdexcept>
#include <vector>
#include <iostream>
#include <iomanip>  // for std::hex, std::setfill, std::setw
#include <cstring>
//#include <sstream>
#ifdef __linux__
#include <dlfcn.h>
#endif

namespace stelar {
#if defined _WIN32
    #define LoadFunction GetProcAddress
    HMODULE vulkan_library{nullptr};
#elif defined __linux__
    #define LoadFunction dlsym
    void* vulkan_loader_library{nullptr};
#endif
    uint32_t count{0};
    VkResult result{VK_SUCCESS};
    VkInstance instance{VK_NULL_HANDLE};
    std::vector<char const *> instance_extensions_req {"VK_KHR_surface", "VK_KHR_xcb_surface"};

bool is_extension_available(std::vector<VkExtensionProperties> const& available_extensions,
                            char const* const extension)
{
    for( auto& available_extension : available_extensions )
        if( strstr( available_extension.extensionName, extension ) )
            return true;
    return false;
}
std::ostream& operator<<(std::ostream& os, const VkPhysicalDeviceFeatures& features)
{
    os << "\tPhysical Device Vulkan 1.0 Features:\n";
    
    auto print_feature = [&os](const char* name, VkBool32 value) {
        os << "\t\t" << name << ": " << (value ? "Yes" : "No") << "\n";
    };
    
    print_feature("Robust Buffer Access", features.robustBufferAccess);
    print_feature("Full Draw Index Uint32", features.fullDrawIndexUint32);
    print_feature("Image Cube Array", features.imageCubeArray);
    print_feature("Independent Blend", features.independentBlend);
    print_feature("Geometry Shader", features.geometryShader);
    print_feature("Tessellation Shader", features.tessellationShader);
    print_feature("Sample Rate Shading", features.sampleRateShading);
    print_feature("Dual Src Blend", features.dualSrcBlend);
    print_feature("Logic Op", features.logicOp);
    print_feature("Multi Draw Indirect", features.multiDrawIndirect);
    print_feature("Draw Indirect First Instance", features.drawIndirectFirstInstance);
    print_feature("Depth Clamp", features.depthClamp);
    print_feature("Depth Bias Clamp", features.depthBiasClamp);
    print_feature("Fill Mode Non Solid", features.fillModeNonSolid);
    print_feature("Depth Bounds", features.depthBounds);
    print_feature("Wide Lines", features.wideLines);
    print_feature("Large Points", features.largePoints);
    print_feature("Alpha To One", features.alphaToOne);
    print_feature("Multi Viewport", features.multiViewport);
    print_feature("Sampler Anisotropy", features.samplerAnisotropy);
    print_feature("Texture Compression ETC2", features.textureCompressionETC2);
    print_feature("Texture Compression ASTC LDR", features.textureCompressionASTC_LDR);
    print_feature("Texture Compression BC", features.textureCompressionBC);
    print_feature("Occlusion Query Precise", features.occlusionQueryPrecise);
    print_feature("Pipeline Statistics Query", features.pipelineStatisticsQuery);
    print_feature("Vertex Pipeline Stores And Atomics", features.vertexPipelineStoresAndAtomics);
    print_feature("Fragment Stores And Atomics", features.fragmentStoresAndAtomics);
    print_feature("Shader Tessellation And Geometry Point Size", features.shaderTessellationAndGeometryPointSize);
    print_feature("Shader Image Gather Extended", features.shaderImageGatherExtended);
    print_feature("Shader Storage Image Extended Formats", features.shaderStorageImageExtendedFormats);
    print_feature("Shader Storage Image Multisample", features.shaderStorageImageMultisample);
    print_feature("Shader Storage Image Read Without Format", features.shaderStorageImageReadWithoutFormat);
    print_feature("Shader Storage Image Write Without Format", features.shaderStorageImageWriteWithoutFormat);
    print_feature("Shader Uniform Buffer Array Dynamic Indexing", features.shaderUniformBufferArrayDynamicIndexing);
    print_feature("Shader Sampled Image Array Dynamic Indexing", features.shaderSampledImageArrayDynamicIndexing);
    print_feature("Shader Storage Buffer Array Dynamic Indexing", features.shaderStorageBufferArrayDynamicIndexing);
    print_feature("Shader Storage Image Array Dynamic Indexing", features.shaderStorageImageArrayDynamicIndexing);
    print_feature("Shader Clip Distance", features.shaderClipDistance);
    print_feature("Shader Cull Distance", features.shaderCullDistance);
    print_feature("Shader Float64", features.shaderFloat64);
    print_feature("Shader Int64", features.shaderInt64);
    print_feature("Shader Int16", features.shaderInt16);
    print_feature("Shader Resource Residency", features.shaderResourceResidency);
    print_feature("Shader Resource Min Lod", features.shaderResourceMinLod);
    print_feature("Sparse Binding", features.sparseBinding);
    print_feature("Sparse Residency Buffer", features.sparseResidencyBuffer);
    print_feature("Sparse Residency Image 2D", features.sparseResidencyImage2D);
    print_feature("Sparse Residency Image 3D", features.sparseResidencyImage3D);
    print_feature("Sparse Residency 2 Samples", features.sparseResidency2Samples);
    print_feature("Sparse Residency 4 Samples", features.sparseResidency4Samples);
    print_feature("Sparse Residency 8 Samples", features.sparseResidency8Samples);
    print_feature("Sparse Residency 16 Samples", features.sparseResidency16Samples);
    print_feature("Sparse Residency Aliased", features.sparseResidencyAliased);
    print_feature("Variable Multisample Rate", features.variableMultisampleRate);
    print_feature("Inherited Queries", features.inheritedQueries);
    
    return os;
}
std::ostream& operator<<(std::ostream& os, const VkPhysicalDeviceVulkan11Features& features)
{
    os << "\tPhysical Device Vulkan 1.1 Features:\n";
    
    auto print_feature = [&os](const char* name, VkBool32 value) {
        os << "\t\t" << name << ": " << (value ? "Yes" : "No") << "\n";
    };
    
    print_feature("Storage Buffer 16 Bit Access", features.storageBuffer16BitAccess);
    print_feature("Uniform And Storage Buffer 16 Bit Access", features.uniformAndStorageBuffer16BitAccess);
    print_feature("Storage Push Constant 16", features.storagePushConstant16);
    print_feature("Storage Input Output 16", features.storageInputOutput16);
    print_feature("Multiview", features.multiview);
    print_feature("Multiview Geometry Shader", features.multiviewGeometryShader);
    print_feature("Multiview Tessellation Shader", features.multiviewTessellationShader);
    print_feature("Variable Pointers Storage Buffer", features.variablePointersStorageBuffer);
    print_feature("Variable Pointers", features.variablePointers);
    print_feature("Protected Memory", features.protectedMemory);
    print_feature("Sampler Ycbcr Conversion", features.samplerYcbcrConversion);
    print_feature("Shader Draw Parameters", features.shaderDrawParameters);
    
    return os;
}
std::ostream& operator<<(std::ostream& os, const VkPhysicalDeviceVulkan12Features& features)
{
    os << "\tPhysical Device Vulkan 1.2 Features:\n";
    
    auto print_feature = [&os](const char* name, VkBool32 value) {
        os << "\t\t" << name << ": " << (value ? "Yes" : "No") << "\n";
    };
    
    print_feature("Sampler Mirror Clamp To Edge", features.samplerMirrorClampToEdge);
    print_feature("Draw Indirect Count", features.drawIndirectCount);
    print_feature("Storage Buffer 8 Bit Access", features.storageBuffer8BitAccess);
    print_feature("Uniform And Storage Buffer 8 Bit Access", features.uniformAndStorageBuffer8BitAccess);
    print_feature("Storage Push Constant 8", features.storagePushConstant8);
    print_feature("Shader Buffer Int64 Atomics", features.shaderBufferInt64Atomics);
    print_feature("Shader Shared Int64 Atomics", features.shaderSharedInt64Atomics);
    print_feature("Shader Float16", features.shaderFloat16);
    print_feature("Shader Int8", features.shaderInt8);
    print_feature("Descriptor Indexing", features.descriptorIndexing);
    print_feature("Shader Input Attachment Array Dynamic Indexing", features.shaderInputAttachmentArrayDynamicIndexing);
    print_feature("Shader Uniform Texel Buffer Array Dynamic Indexing", features.shaderUniformTexelBufferArrayDynamicIndexing);
    print_feature("Shader Storage Texel Buffer Array Dynamic Indexing", features.shaderStorageTexelBufferArrayDynamicIndexing);
    print_feature("Shader Uniform Buffer Array Non Uniform Indexing", features.shaderUniformBufferArrayNonUniformIndexing);
    print_feature("Shader Sampled Image Array Non Uniform Indexing", features.shaderSampledImageArrayNonUniformIndexing);
    print_feature("Shader Storage Buffer Array Non Uniform Indexing", features.shaderStorageBufferArrayNonUniformIndexing);
    print_feature("Shader Storage Image Array Non Uniform Indexing", features.shaderStorageImageArrayNonUniformIndexing);
    print_feature("Shader Input Attachment Array Non Uniform Indexing", features.shaderInputAttachmentArrayNonUniformIndexing);
    print_feature("Shader Uniform Texel Buffer Array Non Uniform Indexing", features.shaderUniformTexelBufferArrayNonUniformIndexing);
    print_feature("Shader Storage Texel Buffer Array Non Uniform Indexing", features.shaderStorageTexelBufferArrayNonUniformIndexing);
    print_feature("Descriptor Binding Uniform Buffer Update After Bind", features.descriptorBindingUniformBufferUpdateAfterBind);
    print_feature("Descriptor Binding Sampled Image Update After Bind", features.descriptorBindingSampledImageUpdateAfterBind);
    print_feature("Descriptor Binding Storage Image Update After Bind", features.descriptorBindingStorageImageUpdateAfterBind);
    print_feature("Descriptor Binding Storage Buffer Update After Bind", features.descriptorBindingStorageBufferUpdateAfterBind);
    print_feature("Descriptor Binding Uniform Texel Buffer Update After Bind", features.descriptorBindingUniformTexelBufferUpdateAfterBind);
    print_feature("Descriptor Binding Storage Texel Buffer Update After Bind", features.descriptorBindingStorageTexelBufferUpdateAfterBind);
    print_feature("Descriptor Binding Update Unused While Pending", features.descriptorBindingUpdateUnusedWhilePending);
    print_feature("Descriptor Binding Partially Bound", features.descriptorBindingPartiallyBound);
    print_feature("Descriptor Binding Variable Descriptor Count", features.descriptorBindingVariableDescriptorCount);
    print_feature("Runtime Descriptor Array", features.runtimeDescriptorArray);
    print_feature("Sampler Filter Minmax", features.samplerFilterMinmax);
    print_feature("Scalar Block Layout", features.scalarBlockLayout);
    print_feature("Imageless Framebuffer", features.imagelessFramebuffer);
    print_feature("Uniform Buffer Standard Layout", features.uniformBufferStandardLayout);
    print_feature("Shader Subgroup Extended Types", features.shaderSubgroupExtendedTypes);
    print_feature("Separate Depth Stencil Layouts", features.separateDepthStencilLayouts);
    print_feature("Host Query Reset", features.hostQueryReset);
    print_feature("Timeline Semaphore", features.timelineSemaphore);
    print_feature("Buffer Device Address", features.bufferDeviceAddress);
    print_feature("Buffer Device Address Capture Replay", features.bufferDeviceAddressCaptureReplay);
    print_feature("Buffer Device Address Multi Device", features.bufferDeviceAddressMultiDevice);
    print_feature("Vulkan Memory Model", features.vulkanMemoryModel);
    print_feature("Vulkan Memory Model Device Scope", features.vulkanMemoryModelDeviceScope);
    print_feature("Vulkan Memory Model Availability Visibility Chains", features.vulkanMemoryModelAvailabilityVisibilityChains);
    print_feature("Shader Output Viewport Index", features.shaderOutputViewportIndex);
    print_feature("Shader Output Layer", features.shaderOutputLayer);
    print_feature("Subgroup Broadcast Dynamic Id", features.subgroupBroadcastDynamicId);
    
    return os;
}
std::ostream& operator<<(std::ostream& os, const VkPhysicalDeviceVulkan13Features& features)
{
    os << "\tPhysical Device Vulkan 1.3 Features:\n";
    
    auto print_feature = [&os](const char* name, VkBool32 value) {
        os << "\t\t" << name << ": " << (value ? "Yes" : "No") << "\n";
    };
    
    print_feature("Robust Image Access", features.robustImageAccess);
    print_feature("Inline Uniform Block", features.inlineUniformBlock);
    print_feature("Descriptor Binding Inline Uniform Block Update After Bind", features.descriptorBindingInlineUniformBlockUpdateAfterBind);
    print_feature("Pipeline Creation Cache Control", features.pipelineCreationCacheControl);
    print_feature("Private Data", features.privateData);
    print_feature("Shader Demote To Helper Invocation", features.shaderDemoteToHelperInvocation);
    print_feature("Shader Terminate Invocation", features.shaderTerminateInvocation);
    print_feature("Subgroup Size Control", features.subgroupSizeControl);
    print_feature("Compute Full Subgroups", features.computeFullSubgroups);
    print_feature("Synchronization2", features.synchronization2);
    print_feature("Texture Compression ASTC HDR", features.textureCompressionASTC_HDR);
    print_feature("Shader Zero Initialize Workgroup Memory", features.shaderZeroInitializeWorkgroupMemory);
    print_feature("Dynamic Rendering", features.dynamicRendering);
    print_feature("Shader Integer Dot Product", features.shaderIntegerDotProduct);
    print_feature("Maintenance4", features.maintenance4);
    
    return os;
}
std::ostream& operator<<(std::ostream& os, VkPhysicalDeviceType type)
{
    switch(type)
    {
        case VK_PHYSICAL_DEVICE_TYPE_INTEGRATED_GPU: 
            os << "Integrated GPU"; 
            break;
        case VK_PHYSICAL_DEVICE_TYPE_DISCRETE_GPU:   
            os << "Discrete GPU"; 
            break;
        case VK_PHYSICAL_DEVICE_TYPE_VIRTUAL_GPU:    
            os << "Virtual GPU"; 
            break;
        case VK_PHYSICAL_DEVICE_TYPE_CPU:            
            os << "CPU"; 
            break;
        default:                                     
            os << "Unknown"; 
            break;
    }
    return os;
}
std::ostream& operator<<(std::ostream& os, const VkPhysicalDevice& device)
{
    VkPhysicalDeviceProperties props;
    vkGetPhysicalDeviceProperties(device, &props);
    
    os << "\tDevice name: " << props.deviceName 
       << ", Device type: " << props.deviceType << "\n";
    os << "\t\tVendor ID: 0x" << std::hex << std::setfill('0') << std::setw(4) 
       << props.vendorID << std::dec << " - Device ID: 0x" 
       << std::hex << std::setw(4) << props.deviceID << std::dec << "\n";
    os << "\t\tAPI version: " 
       << VK_VERSION_MAJOR(props.apiVersion) << "."
       << VK_VERSION_MINOR(props.apiVersion) << "."
       << VK_VERSION_PATCH(props.apiVersion)
       << ", Driver version: " << props.driverVersion << "\n";

#if !defined(VK_VERSION_1_1)
    VkPhysicalDeviceFeatures features;
    vkGetPhysicalDeviceFeatures(device, &features);
    os << features;
#else
    // Vulkan 1.1 or later - use feature chaining
    #if defined(VK_VERSION_1_3)
        VkPhysicalDeviceVulkan13Features features13{};
        features13.sType = VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_VULKAN_1_3_FEATURES;
    #endif
    #if defined(VK_VERSION_1_2)
        VkPhysicalDeviceVulkan12Features features12{};
        features12.sType = VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_VULKAN_1_2_FEATURES;
        #if defined(VK_VERSION_1_3)
            features12.pNext = &features13;
        #endif
    #endif
    VkPhysicalDeviceVulkan11Features features11{};
    features11.sType = VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_VULKAN_1_1_FEATURES;
    #if defined(VK_VERSION_1_3)
        features11.pNext = &features12;
    #endif

    VkPhysicalDeviceFeatures2 features2{};
    features2.sType = VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FEATURES_2;
    features2.pNext = &features11;
    
    vkGetPhysicalDeviceFeatures2(device, &features2);
    
    // Print all features
    std::cout << features2.features;  // Vulkan 1.0
    std::cout << features11;          // Vulkan 1.1
    #if defined(VK_VERSION_1_2)
        std::cout << features12;      // Vulkan 1.2
    #endif
    #if defined(VK_VERSION_1_3)
        std::cout << features13;      // Vulkan 1.3
    #endif
#endif
    return os;
}
std::ostream& operator<<(std::ostream& os, const std::vector<VkPhysicalDevice>& devices)
{
    os << "Physical device(s) enumerated:\n";
    for(const auto& dev : devices)
        os << dev << "\n";
    return os;
}

void init()
{
// Load default vulkan loader library
#if defined _WIN32
    vulkan_library = LoadLibrary( "vulkan-1.dll" );
#elif defined __linux__
    vulkan_loader_library = dlopen( "libvulkan.so.1", RTLD_NOW );
#endif
    if( vulkan_loader_library == nullptr ) {
        throw std::runtime_error( std::string("FAILED loading Vulkan Runtime library: ")
#if __linux__
         + dlerror()
#endif
        );
    }
#ifdef __linux__
    // Report any errors clearing dlerror. I do not see any reason to throw at this point
    while( char* err = dlerror() )
        std::cerr << "dlerror while loading Vulkan library: " << err << "\n";
    //std::stringstream ss;
    //if( ss.str().size() > 0 )
    //    throw std::runtime_error( ss.str() );
#endif
    std::cout << "Vulkan Runtime library loaded.\n";
// Load functions exported from Vulkan loader library
#define EXPORTED_VULKAN_FUNCTION( name )                                                     \
    name = (PFN_##name)LoadFunction( vulkan_loader_library, #name );                         \
    if( name == nullptr )                                                                    \
        throw std::runtime_error( "Could not load exported Vulkan function named: " #name );
// Load Global Level Vulkan functions
#define GLOBAL_LEVEL_VULKAN_FUNCTION( name )                                                 \
    name = (PFN_##name)vkGetInstanceProcAddr( nullptr, #name );                              \
    if( name == nullptr )                                                                    \
        throw std::runtime_error( "Could not load global-level function named: " #name );
#include "vulkan_functions_list.incl"

// Retrieve available instance extensions
    result = vkEnumerateInstanceExtensionProperties( nullptr, &count, nullptr );
    if( (result != VK_SUCCESS) || (count == 0) )
        throw std::runtime_error( std::string( "Could not get the number of Instance extensions." ) );
    std::cout << "Found: " << count << " Vulkan Instance extensions:\n";
    
    std::vector<VkExtensionProperties> instance_extensions( count );
    result = vkEnumerateInstanceExtensionProperties( nullptr, &count, &instance_extensions[0] );
    if( (result != VK_SUCCESS) || (count == 0) )
        throw std::runtime_error( "Could not enumerate Instance extensions." );
    for( const auto& ext : instance_extensions )
        std::cout << "\t" << ext.extensionName << " - version " << ext.specVersion << "\n";
    std::cout << "\n";
// Check available instance extensions for required ones
    for( auto & extension : instance_extensions_req )
        if( !is_extension_available( instance_extensions, extension ) )
            throw std::runtime_error( std::string("Extension named '") + std::string( extension ) + std::string( "' is not supported by an Instance object"));
        else
            std::cout << "Requested extension: " << extension << " was found\n";

// Create instance
    VkApplicationInfo application_info = {
        VK_STRUCTURE_TYPE_APPLICATION_INFO,  // VkStructureType           sType
        nullptr,                             // const void              * pNext
        "test1",                             // const char              * pApplicationName
        VK_MAKE_VERSION( 1, 0, 0 ),          // uint32_t                  applicationVersion
        "stelar3D",                          // const char              * pEngineName
        VK_MAKE_VERSION( 1, 0, 0 ),          // uint32_t                  engineVersion
        VK_MAKE_VERSION( 1, 0, 0 )           // uint32_t                  apiVersion
    };

    VkInstanceCreateInfo instance_create_info = {
        VK_STRUCTURE_TYPE_INSTANCE_CREATE_INFO,             // VkStructureType           sType
        nullptr,                                            // const void              * pNext
        0,                                                  // VkInstanceCreateFlags     flags
        &application_info,                                  // const VkApplicationInfo * pApplicationInfo
        0,                                                  // uint32_t                  enabledLayerCount
        nullptr,                                            // const char * const      * ppEnabledLayerNames
        static_cast<uint32_t>(instance_extensions_req.size()),   // uint32_t                  enabledExtensionCount
        instance_extensions_req.size() > 0 ? &instance_extensions_req[0] : nullptr  // const char * const      * ppEnabledExtensionNames
    };

    result = vkCreateInstance( &instance_create_info, nullptr, &instance );
    if( (result != VK_SUCCESS) || (instance == VK_NULL_HANDLE) )
        throw std::runtime_error( "Could not create Vulkan instance" );
    std::cout << "Created Vulkan Instance\n";


// Will now load instance-level functions. They are used mainly for operations on physical devices
    // Load Instance level functions
#define INSTANCE_LEVEL_VULKAN_FUNCTION( name )                                               \
    name = (PFN_##name)vkGetInstanceProcAddr( instance, #name );                             \
    if( name == nullptr )                                                                    \
        throw std::runtime_error( "Could not load instance-level Vulkan function: " #name ); \
    else                                                                                     \
        std::cout << "Loaded instance-level Vulkan function: " #name "\n";
// Load extension specific instance level functions
/* for some reason he had this bullcrap in the book:
   std::vector<char const *> enabled_extensions
   for( auto & enabled_extension : enabled_extensions )                                                                 \
        if( std::string( enabled_extension ) == std::string( extension ) )  {                                           \
            if( name = (PFN_##name)vkGetInstanceProcAddr( instance, #name ); name == nullptr )                          \
                throw std::runtime_error( "Could not load extension specific instance-level Vulkan function: " #name ); \
            else                                                                                                        \
                std::cout << "Loaded extension specific instance-level Vulkan function: " #name "\n"; }
**/
#define INSTANCE_LEVEL_VULKAN_FUNCTION_FROM_EXTENSION( name, extension )                                        \
    if( name = (PFN_##name)vkGetInstanceProcAddr( instance, #name ); name == nullptr )                          \
        throw std::runtime_error( "Could not load extension specific instance-level Vulkan function: " #name ); \
    else                                                                                                        \
        std::cout << "Loaded extension specific instance-level Vulkan function: " #name "\n";
#include "vulkan_functions_list.incl"

// Enumerate available physical device
    count = 0;
    result = vkEnumeratePhysicalDevices( instance, &count, nullptr );
    if( (result != VK_SUCCESS) ||(count == 0) ) 
        throw std::runtime_error( "Could not get the number of available physical devices" );
    else
        std::cout << "Found: " << count << " physical devices.\n";
    std::vector<VkPhysicalDevice> physical_devices( count );
    result = vkEnumeratePhysicalDevices( instance, &count, &physical_devices[0] );
    if( (result != VK_SUCCESS) || (count == 0) ) 
        throw std::runtime_error( "Could not enumerate physical devices" );

// Get available physical device's extension properties
    auto & physical_device = physical_devices[0];
    count = 0;
    result = vkEnumerateDeviceExtensionProperties( physical_device, nullptr, &count, nullptr );
    if( (result != VK_SUCCESS) || (count == 0) )
        throw std::runtime_error( "Could not get the number of device extension properties" );
    else
        std::cout << "Found: " << count << " device extension properties:\n";
    std::vector<VkExtensionProperties> dev_ext_prop( count );
    result = vkEnumerateDeviceExtensionProperties( physical_device, nullptr, &count, &dev_ext_prop[0] );
    if( (result != VK_SUCCESS) || (count == 0) )
        throw std::runtime_error( "Could not get device extension properties" );
    for(const auto& prop: dev_ext_prop)
        std::cout << "\t" << std::string(prop.extensionName) << " . Version: " << std::to_string(prop.specVersion) << "\n";
    
// Get features and properties of physical device
    std::cout << physical_devices;

// Available queue familes and properties
    count = 0;
    vkGetPhysicalDeviceQueueFamilyProperties( physical_device, &count, nullptr );
    if( count == 0 )
        throw std::runtime_error("Could not get the number of queue families");

    std::vector<VkQueueFamilyProperties> queue_families( count );
    vkGetPhysicalDeviceQueueFamilyProperties( physical_device, &count, &queue_families[0] );
    if( count == 0 )
        throw std::runtime_error( "Could not acquire properties of queue families" );
}

void deinit()
{
#ifdef __linux__
    dlclose(vulkan_loader_library);
#endif
}
}
