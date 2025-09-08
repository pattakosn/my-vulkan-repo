FROM debian:trixie-slim

# Install essential build tools and Vulkan dependencies
RUN apt-get update && apt-get install -y  --no-install-recommends \
    build-essential \
    g++ \
    gdb \
    lldb \
    clang \
    cmake \
    git \
   # wget \
    vulkan-tools \
    libvulkan-dev \
  #  vulkan-validationlayers-dev \
    spirv-tools \
    glslang-tools \
   # libglfw3 \
   # libglfw3-dev \
   # libsdl3-dev \
   # libglm-dev \
    libxxf86vm-dev \
    libxi-dev \
    glslang-tools \
    vim \
    glslc \
    glslang-dev \
    libshaderc-dev \
    libvulkan-memory-allocator-dev \
    && rm -rf /var/lib/apt/lists/*

#RUN apt-get update && apt-get install -y libfreetype-dev
    
# Set working directory
WORKDIR /app
RUN useradd -m devcontainer
RUN chown -R devcontainer:devcontainer /app
USER devcontainer

# Optional: Set environment variables for Vulkan
ENV VK_LAYER_PATH=/usr/share/vulkan/explicit_layer.d

# Default command
CMD ["/bin/bash"]