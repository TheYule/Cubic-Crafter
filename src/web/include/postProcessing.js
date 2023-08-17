/**
 * postprocessing v6.33.0 build Wed Aug 16 2023

 * Copyright 2015-2023 Raoul van Rüschen
 * @license Zlib
 */
if(typeof window==="object"&&!window.require)window.require=()=>window.THREE;
"use strict";
var POSTPROCESSING = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);


  var src_exports = {};
  __export(src_exports, {
    AdaptiveLuminanceMaterial: () => AdaptiveLuminanceMaterial,
    AdaptiveLuminancePass: () => AdaptiveLuminancePass,
    BlendFunction: () => BlendFunction,
    BlendMode: () => BlendMode,
    BloomEffect: () => BloomEffect,
    BlurPass: () => KawaseBlurPass,
    BokehEffect: () => BokehEffect,
    BokehMaterial: () => BokehMaterial,
    BoxBlurMaterial: () => BoxBlurMaterial,
    BoxBlurPass: () => BoxBlurPass,
    BrightnessContrastEffect: () => BrightnessContrastEffect,
    ChromaticAberrationEffect: () => ChromaticAberrationEffect,
    CircleOfConfusionMaterial: () => CircleOfConfusionMaterial,
    ClearMaskPass: () => ClearMaskPass,
    ClearPass: () => ClearPass,
    ColorAverageEffect: () => ColorAverageEffect,
    ColorChannel: () => ColorChannel,
    ColorDepthEffect: () => ColorDepthEffect,
    ColorEdgesMaterial: () => EdgeDetectionMaterial,
    ConvolutionMaterial: () => KawaseBlurMaterial,
    CopyMaterial: () => CopyMaterial,
    CopyPass: () => CopyPass,
    DepthComparisonMaterial: () => DepthComparisonMaterial,
    DepthCopyMaterial: () => DepthCopyMaterial,
    DepthCopyMode: () => DepthCopyMode,
    DepthCopyPass: () => DepthCopyPass,
    DepthDownsamplingMaterial: () => DepthDownsamplingMaterial,
    DepthDownsamplingPass: () => DepthDownsamplingPass,
    DepthEffect: () => DepthEffect,
    DepthMaskMaterial: () => DepthMaskMaterial,
    DepthOfFieldEffect: () => DepthOfFieldEffect,
    DepthPass: () => DepthPass,
    DepthPickingPass: () => DepthPickingPass,
    DepthSavePass: () => DepthCopyPass,
    DepthTestStrategy: () => DepthTestStrategy,
    DisplayP3ColorSpace: () => DisplayP3ColorSpace,
    Disposable: () => Disposable,
    DotScreenEffect: () => DotScreenEffect,
    DownsamplingMaterial: () => DownsamplingMaterial,
    EdgeDetectionMaterial: () => EdgeDetectionMaterial,
    EdgeDetectionMode: () => EdgeDetectionMode,
    Effect: () => Effect,
    EffectAttribute: () => EffectAttribute,
    EffectComposer: () => EffectComposer,
    EffectMaterial: () => EffectMaterial,
    EffectPass: () => EffectPass,
    EffectShaderData: () => EffectShaderData,
    EffectShaderSection: () => EffectShaderSection,
    FXAAEffect: () => FXAAEffect,
    GammaCorrectionEffect: () => GammaCorrectionEffect,
    GaussKernel: () => GaussKernel,
    GaussianBlurMaterial: () => GaussianBlurMaterial,
    GaussianBlurPass: () => GaussianBlurPass,
    GlitchEffect: () => GlitchEffect,
    GlitchMode: () => GlitchMode,
    GodRaysEffect: () => GodRaysEffect,
    GodRaysMaterial: () => GodRaysMaterial,
    GridEffect: () => GridEffect,
    HueSaturationEffect: () => HueSaturationEffect,
    ImmutableTimer: () => ImmutableTimer,
    Initializable: () => Initializable,
    KawaseBlurMaterial: () => KawaseBlurMaterial,
    KawaseBlurPass: () => KawaseBlurPass,
    KernelSize: () => KernelSize,
    LUT1DEffect: () => LUT1DEffect,
    LUT3DEffect: () => LUT3DEffect,
    LUT3dlLoader: () => LUT3dlLoader,
    LUTCubeLoader: () => LUTCubeLoader,
    LUTEffect: () => LUT3DEffect,
    LUTOperation: () => LUTOperation,
    LambdaPass: () => LambdaPass,
    LensDistortionEffect: () => LensDistortionEffect,
    LinearSRGBColorSpace: () => LinearSRGBColorSpace,
    LookupTexture: () => LookupTexture,
    LookupTexture3D: () => LookupTexture,
    LuminanceMaterial: () => LuminanceMaterial,
    LuminancePass: () => LuminancePass,
    MaskFunction: () => MaskFunction,
    MaskMaterial: () => MaskMaterial,
    MaskPass: () => MaskPass,
    MipmapBlurPass: () => MipmapBlurPass,
    NoColorSpace: () => NoColorSpace,
    NoiseEffect: () => NoiseEffect,
    NoiseTexture: () => NoiseTexture,
    NormalPass: () => NormalPass,
    OutlineEdgesMaterial: () => OutlineMaterial,
    OutlineEffect: () => OutlineEffect,
    OutlineMaterial: () => OutlineMaterial,
    OverrideMaterialManager: () => OverrideMaterialManager,
    Pass: () => Pass,
    PixelationEffect: () => PixelationEffect,
    PredicationMode: () => PredicationMode,
    RawImageData: () => RawImageData,
    RealisticBokehEffect: () => RealisticBokehEffect,
    RenderPass: () => RenderPass,
    Resizable: () => Resizable,
    Resizer: () => Resolution,
    Resolution: () => Resolution,
    SMAAAreaImageData: () => SMAAAreaImageData,
    SMAAEffect: () => SMAAEffect,
    SMAAImageGenerator: () => SMAAImageGenerator,
    SMAAImageLoader: () => SMAAImageLoader,
    SMAAPreset: () => SMAAPreset,
    SMAASearchImageData: () => SMAASearchImageData,
    SMAAWeightsMaterial: () => SMAAWeightsMaterial,
    SRGBColorSpace: () => SRGBColorSpace,
    SSAOEffect: () => SSAOEffect,
    SSAOMaterial: () => SSAOMaterial,
    SavePass: () => CopyPass,
    ScanlineEffect: () => ScanlineEffect,
    Section: () => EffectShaderSection,
    Selection: () => Selection,
    SelectiveBloomEffect: () => SelectiveBloomEffect,
    SepiaEffect: () => SepiaEffect,
    ShaderPass: () => ShaderPass,
    ShockWaveEffect: () => ShockWaveEffect,
    TetrahedralUpscaler: () => TetrahedralUpscaler,
    TextureEffect: () => TextureEffect,
    TiltShiftBlurMaterial: () => TiltShiftBlurMaterial,
    TiltShiftBlurPass: () => TiltShiftBlurPass,
    TiltShiftEffect: () => TiltShiftEffect,
    Timer: () => Timer,
    ToneMappingEffect: () => ToneMappingEffect,
    ToneMappingMode: () => ToneMappingMode,
    UpsamplingMaterial: () => UpsamplingMaterial,
    VignetteEffect: () => VignetteEffect,
    VignetteTechnique: () => VignetteTechnique,
    WebGLExtension: () => WebGLExtension
  });


  var Disposable = class {
    /**
     * Frees internal resources.
     */
    dispose() {
    }
  };


  var import_three40 = __require("three");


  var import_three26 = __require("three");


  var import_three = __require("three");





  var common_default = "varying vec2 vUv;\n\nvoid main() {\n\n	vUv = position.xy * 0.5 + 0.5;\n	gl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";


  var AdaptiveLuminanceMaterial = class extends import_three.ShaderMaterial {
    /**
     * Constructs a new adaptive luminance material.
     */
    constructor() {
      super({
        name: "AdaptiveLuminanceMaterial",
        defines: {
          MIP_LEVEL_1X1: "0.0"
        },
        uniforms: {
          luminanceBuffer0: new import_three.Uniform(null),
          luminanceBuffer1: new import_three.Uniform(null),
          minLuminance: new import_three.Uniform(0.01),
          deltaTime: new import_three.Uniform(0),
          tau: new import_three.Uniform(1)
        },
        extensions: {
          shaderTextureLOD: true
        },
        blending: import_three.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: adaptive_luminance_default,
        vertexShader: common_default
      });
    }
    /**
     * The primary luminance buffer that contains the downsampled average luminance.
     *
     * @type {Texture}
     */
    set luminanceBuffer0(value) {
      this.uniforms.luminanceBuffer0.value = value;
    }
    /**
     * Sets the primary luminance buffer that contains the downsampled average luminance.
     *
     * @deprecated Use luminanceBuffer0 instead.
     * @param {Texture} value - The buffer.
     */
    setLuminanceBuffer0(value) {
      this.uniforms.luminanceBuffer0.value = value;
    }
    /**
     * The secondary luminance buffer.
     *
     * @type {Texture}
     */
    set luminanceBuffer1(value) {
      this.uniforms.luminanceBuffer1.value = value;
    }
    /**
     * Sets the secondary luminance buffer.
     *
     * @deprecated Use luminanceBuffer1 instead.
     * @param {Texture} value - The buffer.
     */
    setLuminanceBuffer1(value) {
      this.uniforms.luminanceBuffer1.value = value;
    }
    /**
     * The 1x1 mipmap level.
     *
     * This level is used to identify the smallest mipmap of the primary luminance buffer.
     *
     * @type {Number}
     */
    set mipLevel1x1(value) {
      this.defines.MIP_LEVEL_1X1 = value.toFixed(1);
      this.needsUpdate = true;
    }
    /**
     * Sets the 1x1 mipmap level.
     *
     * @deprecated Use mipLevel1x1 instead.
     * @param {Number} value - The level.
     */
    setMipLevel1x1(value) {
      this.mipLevel1x1 = value;
    }
    /**
     * The delta time.
     *
     * @type {Number}
     */
    set deltaTime(value) {
      this.uniforms.deltaTime.value = value;
    }
    /**
     * Sets the delta time.
     *
     * @deprecated Use deltaTime instead.
     * @param {Number} value - The delta time.
     */
    setDeltaTime(value) {
      this.uniforms.deltaTime.value = value;
    }
    /**
     * The lowest possible luminance value.
     *
     * @type {Number}
     */
    get minLuminance() {
      return this.uniforms.minLuminance.value;
    }
    set minLuminance(value) {
      this.uniforms.minLuminance.value = value;
    }
    /**
     * Returns the lowest possible luminance value.
     *
     * @deprecated Use minLuminance instead.
     * @return {Number} The minimum luminance.
     */
    getMinLuminance() {
      return this.uniforms.minLuminance.value;
    }
    /**
     * Sets the minimum luminance.
     *
     * @deprecated Use minLuminance instead.
     * @param {Number} value - The minimum luminance.
     */
    setMinLuminance(value) {
      this.uniforms.minLuminance.value = value;
    }
    /**
     * The luminance adaptation rate.
     *
     * @type {Number}
     */
    get adaptationRate() {
      return this.uniforms.tau.value;
    }
    set adaptationRate(value) {
      this.uniforms.tau.value = value;
    }
    /**
     * Returns the luminance adaptation rate.
     *
     * @deprecated Use adaptationRate instead.
     * @return {Number} The adaptation rate.
     */
    getAdaptationRate() {
      return this.uniforms.tau.value;
    }
    /**
     * Sets the luminance adaptation rate.
     *
     * @deprecated Use adaptationRate instead.
     * @param {Number} value - The adaptation rate.
     */
    setAdaptationRate(value) {
      this.uniforms.tau.value = value;
    }
  };


  var import_three2 = __require("three");





  var BokehMaterial = class extends import_three2.ShaderMaterial {
    /**
     * Constructs a new bokeh material.
     *
     * @param {Boolean} [fill=false] - Enables or disables the bokeh highlight fill mode.
     * @param {Boolean} [foreground=false] - Determines whether this material will be applied to foreground colors.
     */
    constructor(fill = false, foreground = false) {
      super({
        name: "BokehMaterial",
        defines: {
          PASS: fill ? "2" : "1"
        },
        uniforms: {
          inputBuffer: new import_three2.Uniform(null),
          cocBuffer: new import_three2.Uniform(null),
          texelSize: new import_three2.Uniform(new import_three2.Vector2()),
          kernel64: new import_three2.Uniform(null),
          kernel16: new import_three2.Uniform(null),
          scale: new import_three2.Uniform(1)
        },
        blending: import_three2.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: convolution_bokeh_default,
        vertexShader: common_default
      });
      if (foreground) {
        this.defines.FOREGROUND = "1";
      }
      this.generateKernel();
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Texture} value - The buffer.
     */
    setInputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * The circle of confusion buffer.
     *
     * @type {Texture}
     */
    set cocBuffer(value) {
      this.uniforms.cocBuffer.value = value;
    }
    /**
     * Sets the circle of confusion buffer.
     *
     * @deprecated Use cocBuffer instead.
     * @param {Texture} value - The buffer.
     */
    setCoCBuffer(value) {
      this.uniforms.cocBuffer.value = value;
    }
    /**
     * The blur scale.
     *
     * @type {Number}
     */
    get scale() {
      return this.uniforms.scale.value;
    }
    set scale(value) {
      this.uniforms.scale.value = value;
    }
    /**
     * Returns the blur scale.
     *
     * @deprecated Use scale instead.
     * @return {Number} The scale.
     */
    getScale(value) {
      return this.scale;
    }
    /**
     * Sets the blur scale.
     *
     * @deprecated Use scale instead.
     * @param {Number} value - The scale.
     */
    setScale(value) {
      this.scale = value;
    }
    /**
     * Generates the blur kernel.
     *
     * @private
     */
    generateKernel() {
      const GOLDEN_ANGLE = 2.39996323;
      const points64 = new Float64Array(128);
      const points16 = new Float64Array(32);
      let i64 = 0, i16 = 0;
      for (let i = 0, sqrt80 = Math.sqrt(80); i < 80; ++i) {
        const theta = i * GOLDEN_ANGLE;
        const r = Math.sqrt(i) / sqrt80;
        const u = r * Math.cos(theta), v3 = r * Math.sin(theta);
        if (i % 5 === 0) {
          points16[i16++] = u;
          points16[i16++] = v3;
        } else {
          points64[i64++] = u;
          points64[i64++] = v3;
        }
      }
      this.uniforms.kernel64.value = points64;
      this.uniforms.kernel16.value = points16;
    }
    /**
     * Sets the texel size.
     *
     * @deprecated Use setSize() instead.
     * @param {Number} x - The texel width.
     * @param {Number} y - The texel height.
     */
    setTexelSize(x, y) {
      this.uniforms.texelSize.value.set(x, y);
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.uniforms.texelSize.value.set(1 / width, 1 / height);
    }
  };


  var import_three4 = __require("three");


  var import_three3 = __require("three");


  var BlendFunction = {
    SKIP: 9,
    SET: 30,
    ADD: 0,
    ALPHA: 1,
    AVERAGE: 2,
    COLOR: 3,
    COLOR_BURN: 4,
    COLOR_DODGE: 5,
    DARKEN: 6,
    DIFFERENCE: 7,
    DIVIDE: 8,
    DST: 9,
    EXCLUSION: 10,
    HARD_LIGHT: 11,
    HARD_MIX: 12,
    HUE: 13,
    INVERT: 14,
    INVERT_RGB: 15,
    LIGHTEN: 16,
    LINEAR_BURN: 17,
    LINEAR_DODGE: 18,
    LINEAR_LIGHT: 19,
    LUMINOSITY: 20,
    MULTIPLY: 21,
    NEGATION: 22,
    NORMAL: 23,
    OVERLAY: 24,
    PIN_LIGHT: 25,
    REFLECT: 26,
    SATURATION: 27,
    SCREEN: 28,
    SOFT_LIGHT: 29,
    SRC: 30,
    SUBTRACT: 31,
    VIVID_LIGHT: 32
  };


  var ColorChannel = {
    RED: 0,
    GREEN: 1,
    BLUE: 2,
    ALPHA: 3
  };


  var NoColorSpace = "";
  var SRGBColorSpace = "srgb";
  var LinearSRGBColorSpace = "srgb-linear";
  var DisplayP3ColorSpace = "display-p3";


  var DepthCopyMode = {
    FULL: 0,
    SINGLE: 1
  };


  var DepthTestStrategy = {
    DEFAULT: 0,
    KEEP_MAX_DEPTH: 1,
    DISCARD_MAX_DEPTH: 2
  };


  var EdgeDetectionMode = {
    DEPTH: 0,
    LUMA: 1,
    COLOR: 2
  };


  var EffectAttribute = {
    NONE: 0,
    DEPTH: 1,
    CONVOLUTION: 2
  };


  var EffectShaderSection = {
    FRAGMENT_HEAD: "FRAGMENT_HEAD",
    FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV",
    FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE",
    VERTEX_HEAD: "VERTEX_HEAD",
    VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT"
  };


  var GlitchMode = {
    DISABLED: 0,
    SPORADIC: 1,
    CONSTANT_MILD: 2,
    CONSTANT_WILD: 3
  };


  var KernelSize = {
    VERY_SMALL: 0,
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    VERY_LARGE: 4,
    HUGE: 5
  };


  var LUTOperation = {
    SCALE_UP: "lut.scaleup"
  };


  var MaskFunction = {
    DISCARD: 0,
    MULTIPLY: 1,
    MULTIPLY_RGB_SET_ALPHA: 2
  };


  var PredicationMode = {
    DISABLED: 0,
    DEPTH: 1,
    CUSTOM: 2
  };


  var SMAAPreset = {
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    ULTRA: 3
  };


  var ToneMappingMode = {
    REINHARD: 0,
    REINHARD2: 1,
    REINHARD2_ADAPTIVE: 2,
    OPTIMIZED_CINEON: 3,
    ACES_FILMIC: 4,
    UNCHARTED2: 5
  };


  var VignetteTechnique = {
    DEFAULT: 0,
    ESKIL: 1
  };


  var WebGLExtension = {
    DERIVATIVES: "derivatives",
    FRAG_DEPTH: "fragDepth",
    DRAW_BUFFERS: "drawBuffers",
    SHADER_TEXTURE_LOD: "shaderTextureLOD"
  };


  var revision = Number(import_three3.REVISION.replace(/\D+/g, ""));
  var useColorSpace = revision >= 152;
  var encodingToColorSpace = /* @__PURE__ */ new Map([
    [import_three3.LinearEncoding, LinearSRGBColorSpace],
    [import_three3.sRGBEncoding, SRGBColorSpace]
  ]);
  var colorSpaceToEncoding = /* @__PURE__ */ new Map([
    [LinearSRGBColorSpace, import_three3.LinearEncoding],
    [SRGBColorSpace, import_three3.sRGBEncoding]
  ]);
  function getOutputColorSpace(renderer) {
    return renderer === null ? null : useColorSpace ? renderer.outputColorSpace : encodingToColorSpace.get(renderer.outputEncoding);
  }
  function setTextureColorSpace(texture, colorSpace) {
    if (texture === null) {
      return;
    }
    if (useColorSpace) {
      texture.colorSpace = colorSpace;
    } else {
      texture.encoding = colorSpaceToEncoding.get(colorSpace);
    }
  }
  function copyTextureColorSpace(src, dest) {
    if (src === null || dest === null) {
      return;
    }
    if (useColorSpace) {
      dest.colorSpace = src.colorSpace;
    } else {
      dest.encoding = src.encoding;
    }
  }
  function updateFragmentShader(fragmentShader) {
    if (revision < 154) {
      return fragmentShader.replace("colorspace_fragment", "encodings_fragment");
    }
    return fragmentShader;
  }


  function orthographicDepthToViewZ(depth, near, far) {
    return depth * (near - far) - near;
  }


  function viewZToOrthographicDepth(viewZ, near, far) {
    return Math.min(Math.max((viewZ + near) / (near - far), 0), 1);
  }








  var BoxBlurMaterial = class extends import_three4.ShaderMaterial {
    /**
     * Constructs a new box blur material.
     *
     * @param {Object} [options] - The options.
     * @param {Number} [options.bilateral=false] - Enables or disables bilateral blurring.
     * @param {Number} [options.kernelSize=5] - The kernel size.
     */
    constructor({ bilateral = false, kernelSize = 5 } = {}) {
      super({
        name: "BoxBlurMaterial",
        defines: {
          DEPTH_PACKING: "0",
          DISTANCE_THRESHOLD: "0.1"
        },
        uniforms: {
          inputBuffer: new import_three4.Uniform(null),
          depthBuffer: new import_three4.Uniform(null),
          normalDepthBuffer: new import_three4.Uniform(null),
          texelSize: new import_three4.Uniform(new import_three4.Vector2()),
          cameraNearFar: new import_three4.Uniform(new import_three4.Vector2()),
          scale: new import_three4.Uniform(1)
        },
        blending: import_three4.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: convolution_box_default,
        vertexShader: convolution_box_default2
      });
      this.bilateral = bilateral;
      this.kernelSize = kernelSize;
      this.maxVaryingVectors = 8;
    }
    /**
     * The maximum amount of varying vectors.
     *
     * Should be synced with `renderer.capabilities.maxVaryings`. Default is 8.
     *
     * @type {Number}
     */
    set maxVaryingVectors(value) {
      this.defines.MAX_VARYING_VECTORS = value.toFixed(0);
    }
    /**
     * The kernel size.
     *
     * - Must be an odd number
     * - Kernel size 3 and 5 use optimized code paths
     * - Default is 5
     *
     * @type {Number}
     */
    get kernelSize() {
      return Number(this.defines.KERNEL_SIZE);
    }
    set kernelSize(value) {
      if (value % 2 === 0) {
        throw new Error("The kernel size must be an odd number");
      }
      this.defines.KERNEL_SIZE = value.toFixed(0);
      this.defines.KERNEL_SIZE_HALF = Math.floor(value / 2).toFixed(0);
      this.defines.KERNEL_SIZE_SQ = (value ** 2).toFixed(0);
      this.defines.KERNEL_SIZE_SQ_HALF = Math.floor(value ** 2 / 2).toFixed(0);
      this.defines.INV_KERNEL_SIZE_SQ = (1 / value ** 2).toFixed(6);
      this.needsUpdate = true;
    }
    /**
     * The blur scale.
     *
     * @type {Number}
     */
    get scale() {
      return this.uniforms.scale.value;
    }
    set scale(value) {
      this.uniforms.scale.value = value;
    }
    /**
     * The current near plane setting.
     *
     * @type {Number}
     * @private
     */
    get near() {
      return this.uniforms.cameraNearFar.value.x;
    }
    /**
     * The current far plane setting.
     *
     * @type {Number}
     * @private
     */
    get far() {
      return this.uniforms.cameraNearFar.value.y;
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * The depth buffer.
     *
     * @type {Texture}
     */
    set depthBuffer(value) {
      this.uniforms.depthBuffer.value = value;
    }
    /**
     * A combined normal-depth buffer. Overrides {@link depthBuffer} if set.
     *
     * @type {Texture}
     */
    set normalDepthBuffer(value) {
      this.uniforms.normalDepthBuffer.value = value;
      if (value !== null) {
        this.defines.NORMAL_DEPTH = "1";
      } else {
        delete this.defines.NORMAL_DEPTH;
      }
      this.needsUpdate = true;
    }
    /**
     * The depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    set depthPacking(value) {
      this.defines.DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Indicates whether bilateral filtering is enabled.
     *
     * @type {Boolean}
     */
    get bilateral() {
      return this.defines.BILATERAL !== void 0;
    }
    set bilateral(value) {
      if (value !== null) {
        this.defines.BILATERAL = "1";
      } else {
        delete this.defines.BILATERAL;
      }
      this.needsUpdate = true;
    }
    /**
     * The bilateral filter distance threshold in world units.
     *
     * @type {Number}
     */
    get worldDistanceThreshold() {
      return -orthographicDepthToViewZ(Number(this.defines.DISTANCE_THRESHOLD), this.near, this.far);
    }
    set worldDistanceThreshold(value) {
      const threshold = viewZToOrthographicDepth(-value, this.near, this.far);
      this.defines.DISTANCE_THRESHOLD = threshold.toFixed(12);
      this.needsUpdate = true;
    }
    /**
     * Copies the settings of the given camera.
     *
     * @param {Camera} camera - A camera.
     */
    copyCameraSettings(camera) {
      if (camera) {
        this.uniforms.cameraNearFar.value.set(camera.near, camera.far);
        if (camera instanceof import_three4.PerspectiveCamera) {
          this.defines.PERSPECTIVE_CAMERA = "1";
        } else {
          delete this.defines.PERSPECTIVE_CAMERA;
        }
        this.needsUpdate = true;
      }
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.uniforms.texelSize.value.set(1 / width, 1 / height);
    }
  };


  var import_three5 = __require("three");


  var circle_of_confusion_default = "#include <common>\n#include <packing>\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n\n	uniform highp sampler2D depthBuffer;\n\n#else\n\n	uniform mediump sampler2D depthBuffer;\n\n#endif\n\nuniform float focusDistance;\nuniform float focusRange;\nuniform float cameraNear;\nuniform float cameraFar;\n\nvarying vec2 vUv;\n\nfloat readDepth(const in vec2 uv) {\n\n	#if DEPTH_PACKING == 3201\n\n		float depth = unpackRGBAToDepth(texture2D(depthBuffer, uv));\n\n	#else\n\n		float depth = texture2D(depthBuffer, uv).r;\n\n	#endif\n\n	#ifdef LOG_DEPTH\n\n		float d = pow(2.0, depth * log2(cameraFar + 1.0)) - 1.0;\n		float a = cameraFar / (cameraFar - cameraNear);\n		float b = cameraFar * cameraNear / (cameraNear - cameraFar);\n		depth = a + b / d;\n\n	#endif\n\n	return depth;\n\n}\n\nvoid main() {\n\n	float depth = readDepth(vUv);\n\n	#ifdef PERSPECTIVE_CAMERA\n\n		float viewZ = perspectiveDepthToViewZ(depth, cameraNear, cameraFar);\n		float linearDepth = viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);\n\n	#else\n\n		float linearDepth = depth;\n\n	#endif\n\n	float signedDistance = linearDepth - focusDistance;\n	float magnitude = smoothstep(0.0, focusRange, abs(signedDistance));\n\n	gl_FragColor.rg = magnitude * vec2(\n		step(signedDistance, 0.0),\n		step(0.0, signedDistance)\n	);\n\n}\n";


  var CircleOfConfusionMaterial = class extends import_three5.ShaderMaterial {
    /**
     * Constructs a new CoC material.
     *
     * @param {Camera} camera - A camera.
     */
    constructor(camera) {
      super({
        name: "CircleOfConfusionMaterial",
        defines: {
          DEPTH_PACKING: "0"
        },
        uniforms: {
          depthBuffer: new import_three5.Uniform(null),
          focusDistance: new import_three5.Uniform(0),
          focusRange: new import_three5.Uniform(0),
          cameraNear: new import_three5.Uniform(0.3),
          cameraFar: new import_three5.Uniform(1e3)
        },
        blending: import_three5.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: circle_of_confusion_default,
        vertexShader: common_default
      });
      this.uniforms.focalLength = this.uniforms.focusRange;
      this.copyCameraSettings(camera);
    }
    /**
     * The current near plane setting.
     *
     * @type {Number}
     * @private
     */
    get near() {
      return this.uniforms.cameraNear.value;
    }
    /**
     * The current far plane setting.
     *
     * @type {Number}
     * @private
     */
    get far() {
      return this.uniforms.cameraFar.value;
    }
    /**
     * The depth buffer.
     *
     * @type {Texture}
     */
    set depthBuffer(value) {
      this.uniforms.depthBuffer.value = value;
    }
    /**
     * The depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    set depthPacking(value) {
      this.defines.DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the depth buffer.
     *
     * @deprecated Use depthBuffer and depthPacking instead.
     * @param {Texture} buffer - The depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthBuffer(buffer, depthPacking = import_three5.BasicDepthPacking) {
      this.depthBuffer = buffer;
      this.depthPacking = depthPacking;
    }
    /**
     * The focus distance. Range: [0.0, 1.0].
     *
     * @type {Number}
     */
    get focusDistance() {
      return this.uniforms.focusDistance.value;
    }
    set focusDistance(value) {
      this.uniforms.focusDistance.value = value;
    }
    /**
     * The focus distance in world units.
     *
     * @type {Number}
     */
    get worldFocusDistance() {
      return -orthographicDepthToViewZ(this.focusDistance, this.near, this.far);
    }
    set worldFocusDistance(value) {
      this.focusDistance = viewZToOrthographicDepth(-value, this.near, this.far);
    }
    /**
     * Returns the focus distance.
     *
     * @deprecated Use focusDistance instead.
     * @return {Number} The focus distance.
     */
    getFocusDistance(value) {
      this.uniforms.focusDistance.value = value;
    }
    /**
     * Sets the focus distance.
     *
     * @deprecated Use focusDistance instead.
     * @param {Number} value - The focus distance.
     */
    setFocusDistance(value) {
      this.uniforms.focusDistance.value = value;
    }
    /**
     * The focal length.
     *
     * @deprecated Renamed to focusRange.
     * @type {Number}
     */
    get focalLength() {
      return this.focusRange;
    }
    set focalLength(value) {
      this.focusRange = value;
    }
    /**
     * The focus range. Range: [0.0, 1.0].
     *
     * @type {Number}
     */
    get focusRange() {
      return this.uniforms.focusRange.value;
    }
    set focusRange(value) {
      this.uniforms.focusRange.value = value;
    }
    /**
     * The focus range in world units.
     *
     * @type {Number}
     */
    get worldFocusRange() {
      return -orthographicDepthToViewZ(this.focusRange, this.near, this.far);
    }
    set worldFocusRange(value) {
      this.focusRange = viewZToOrthographicDepth(-value, this.near, this.far);
    }
    /**
     * Returns the focal length.
     *
     * @deprecated Use focusRange instead.
     * @return {Number} The focal length.
     */
    getFocalLength(value) {
      return this.focusRange;
    }
    /**
     * Sets the focal length.
     *
     * @deprecated Use focusRange instead.
     * @param {Number} value - The focal length.
     */
    setFocalLength(value) {
      this.focusRange = value;
    }
    /**
     * Copies the settings of the given camera.
     *
     * @deprecated Use copyCameraSettings instead.
     * @param {Camera} camera - A camera.
     */
    adoptCameraSettings(camera) {
      this.copyCameraSettings(camera);
    }
    /**
     * Copies the settings of the given camera.
     *
     * @param {Camera} camera - A camera.
     */
    copyCameraSettings(camera) {
      if (camera) {
        this.uniforms.cameraNear.value = camera.near;
        this.uniforms.cameraFar.value = camera.far;
        if (camera instanceof import_three5.PerspectiveCamera) {
          this.defines.PERSPECTIVE_CAMERA = "1";
        } else {
          delete this.defines.PERSPECTIVE_CAMERA;
        }
        this.needsUpdate = true;
      }
    }
  };


  var import_three6 = __require("three");








  var kernelPresets = [
    new Float32Array([0, 0]),
    new Float32Array([0, 1, 1]),
    new Float32Array([0, 1, 1, 2]),
    new Float32Array([0, 1, 2, 2, 3]),
    new Float32Array([0, 1, 2, 3, 4, 4, 5]),
    new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])
  ];
  var KawaseBlurMaterial = class extends import_three6.ShaderMaterial {
    /**
     * Constructs a new convolution material.
     *
     * TODO Remove texelSize param.
     * @param {Vector4} [texelSize] - Deprecated.
     */
    constructor(texelSize = new import_three6.Vector4()) {
      super({
        name: "KawaseBlurMaterial",
        uniforms: {
          inputBuffer: new import_three6.Uniform(null),
          texelSize: new import_three6.Uniform(new import_three6.Vector4()),
          scale: new import_three6.Uniform(1),
          kernel: new import_three6.Uniform(0)
        },
        blending: import_three6.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: convolution_kawase_default,
        vertexShader: convolution_kawase_default2
      });
      this.fragmentShader = updateFragmentShader(this.fragmentShader);
      this.setTexelSize(texelSize.x, texelSize.y);
      this.kernelSize = KernelSize.MEDIUM;
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Texture} value - The input buffer.
     */
    setInputBuffer(value) {
      this.inputBuffer = value;
    }
    /**
     * The kernel sequence for the current kernel size.
     *
     * @type {Float32Array}
     */
    get kernelSequence() {
      return kernelPresets[this.kernelSize];
    }
    /**
     * The blur scale.
     *
     * @type {Number}
     */
    get scale() {
      return this.uniforms.scale.value;
    }
    set scale(value) {
      this.uniforms.scale.value = value;
    }
    /**
     * Returns the blur scale.
     *
     * @deprecated Use scale instead.
     * @return {Number} The scale.
     */
    getScale() {
      return this.uniforms.scale.value;
    }
    /**
     * Sets the blur scale.
     *
     * @deprecated Use scale instead.
     * @return {Number} value - The scale.
     */
    setScale(value) {
      this.uniforms.scale.value = value;
    }
    /**
     * Returns the kernel.
     *
     * @return {Float32Array} The kernel.
     * @deprecated Implementation detail, removed with no replacement.
     */
    getKernel() {
      return null;
    }
    /**
     * The current kernel.
     *
     * @type {Number}
     */
    get kernel() {
      return this.uniforms.kernel.value;
    }
    set kernel(value) {
      this.uniforms.kernel.value = value;
    }
    /**
     * Sets the current kernel.
     *
     * @deprecated Use kernel instead.
     * @param {Number} value - The kernel.
     */
    setKernel(value) {
      this.kernel = value;
    }
    /**
     * Sets the texel size.
     *
     * @deprecated Use setSize() instead.
     * @param {Number} x - The texel width.
     * @param {Number} y - The texel height.
     */
    setTexelSize(x, y) {
      this.uniforms.texelSize.value.set(x, y, x * 0.5, y * 0.5);
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const x = 1 / width, y = 1 / height;
      this.uniforms.texelSize.value.set(x, y, x * 0.5, y * 0.5);
    }
  };


  var import_three7 = __require("three");


  var copy_default = "#include <common>\n#include <dithering_pars_fragment>\n\n#ifdef FRAMEBUFFER_PRECISION_HIGH\n\n	uniform mediump sampler2D inputBuffer;\n\n#else\n\n	uniform lowp sampler2D inputBuffer;\n\n#endif\n\nuniform float opacity;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n	vec4 texel = texture2D(inputBuffer, vUv);\n	gl_FragColor = opacity * texel;\n\n	#include <colorspace_fragment>\n	#include <dithering_fragment>\n\n}\n";


  var CopyMaterial = class extends import_three7.ShaderMaterial {
    /**
     * Constructs a new copy material.
     */
    constructor() {
      super({
        name: "CopyMaterial",
        uniforms: {
          inputBuffer: new import_three7.Uniform(null),
          opacity: new import_three7.Uniform(1)
        },
        blending: import_three7.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: copy_default,
        vertexShader: common_default
      });
      this.fragmentShader = updateFragmentShader(this.fragmentShader);
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Number} value - The buffer.
     */
    setInputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Returns the opacity.
     *
     * @deprecated Use opacity instead.
     * @return {Number} The opacity.
     */
    getOpacity(value) {
      return this.uniforms.opacity.value;
    }
    /**
     * Sets the opacity.
     *
     * @deprecated Use opacity instead.
     * @param {Number} value - The opacity.
     */
    setOpacity(value) {
      this.uniforms.opacity.value = value;
    }
  };


  var import_three8 = __require("three");





  var depth_comparison_default2 = "#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvarying float vViewZ;\nvarying vec4 vProjTexCoord;\n\nvoid main() {\n\n	#include <skinbase_vertex>\n\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n\n	vViewZ = mvPosition.z;\n	vProjTexCoord = gl_Position;\n\n	#include <clipping_planes_vertex>\n\n}\n";


  var DepthComparisonMaterial = class extends import_three8.ShaderMaterial {
    /**
     * Constructs a new depth comparison material.
     *
     * @param {Texture} [depthTexture=null] - A depth texture.
     * @param {PerspectiveCamera} [camera] - A camera.
     */
    constructor(depthTexture = null, camera) {
      super({
        name: "DepthComparisonMaterial",
        defines: {
          DEPTH_PACKING: "0"
        },
        uniforms: {
          depthBuffer: new import_three8.Uniform(null),
          cameraNear: new import_three8.Uniform(0.3),
          cameraFar: new import_three8.Uniform(1e3)
        },
        blending: import_three8.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: depth_comparison_default,
        vertexShader: depth_comparison_default2
      });
      this.depthBuffer = depthTexture;
      this.depthPacking = import_three8.RGBADepthPacking;
      this.copyCameraSettings(camera);
    }
    /**
     * The depth buffer.
     *
     * @type {Texture}
     */
    set depthBuffer(value) {
      this.uniforms.depthBuffer.value = value;
    }
    /**
     * The depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    set depthPacking(value) {
      this.defines.DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the depth buffer.
     *
     * @deprecated Use depthBuffer and depthPacking instead.
     * @param {Texture} buffer - The depth texture.
     * @param {DepthPackingStrategies} [depthPacking=RGBADepthPacking] - The depth packing strategy.
     */
    setDepthBuffer(buffer, depthPacking = import_three8.RGBADepthPacking) {
      this.depthBuffer = buffer;
      this.depthPacking = depthPacking;
    }
    /**
     * Copies the settings of the given camera.
     *
     * @deprecated Use copyCameraSettings instead.
     * @param {Camera} camera - A camera.
     */
    adoptCameraSettings(camera) {
      this.copyCameraSettings(camera);
    }
    /**
     * Copies the settings of the given camera.
     *
     * @param {Camera} camera - A camera.
     */
    copyCameraSettings(camera) {
      if (camera) {
        this.uniforms.cameraNear.value = camera.near;
        this.uniforms.cameraFar.value = camera.far;
        if (camera instanceof import_three8.PerspectiveCamera) {
          this.defines.PERSPECTIVE_CAMERA = "1";
        } else {
          delete this.defines.PERSPECTIVE_CAMERA;
        }
        this.needsUpdate = true;
      }
    }
  };


  var import_three9 = __require("three");


  var depth_copy_default = "#include <packing>\n\nvarying vec2 vUv;\n\n#ifdef NORMAL_DEPTH\n\n	#ifdef GL_FRAGMENT_PRECISION_HIGH\n\n		uniform highp sampler2D normalDepthBuffer;\n\n	#else\n\n		uniform mediump sampler2D normalDepthBuffer;\n\n	#endif\n\n	float readDepth(const in vec2 uv) {\n\n		return texture2D(normalDepthBuffer, uv).a;\n\n	}\n\n#else\n\n	#if INPUT_DEPTH_PACKING == 3201\n\n		uniform lowp sampler2D depthBuffer;\n\n	#elif defined(GL_FRAGMENT_PRECISION_HIGH)\n\n		uniform highp sampler2D depthBuffer;\n\n	#else\n\n		uniform mediump sampler2D depthBuffer;\n\n	#endif\n\n	float readDepth(const in vec2 uv) {\n\n		#if INPUT_DEPTH_PACKING == 3201\n\n			return unpackRGBAToDepth(texture2D(depthBuffer, uv));\n\n		#else\n\n			return texture2D(depthBuffer, uv).r;\n\n		#endif\n\n	}\n\n#endif\n\nvoid main() {\n\n	#if INPUT_DEPTH_PACKING == OUTPUT_DEPTH_PACKING\n\n		gl_FragColor = texture2D(depthBuffer, vUv);\n\n	#else\n\n		float depth = readDepth(vUv);\n\n		#if OUTPUT_DEPTH_PACKING == 3201\n\n			gl_FragColor = (depth == 1.0) ? vec4(1.0) : packDepthToRGBA(depth);\n\n		#else\n\n			gl_FragColor = vec4(vec3(depth), 1.0);\n\n		#endif\n\n	#endif\n\n}\n";


  var depth_copy_default2 = "varying vec2 vUv;\n\n#if DEPTH_COPY_MODE == 1\n\n	uniform vec2 texelPosition;\n\n#endif\n\nvoid main() {\n\n	#if DEPTH_COPY_MODE == 1\n\n		vUv = texelPosition;\n\n	#else\n\n		vUv = position.xy * 0.5 + 0.5;\n\n	#endif\n\n	gl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";


  var DepthCopyMaterial = class extends import_three9.ShaderMaterial {
    /**
     * Constructs a new depth copy material.
     */
    constructor() {
      super({
        name: "DepthCopyMaterial",
        defines: {
          INPUT_DEPTH_PACKING: "0",
          OUTPUT_DEPTH_PACKING: "0",
          DEPTH_COPY_MODE: "0"
        },
        uniforms: {
          depthBuffer: new import_three9.Uniform(null),
          texelPosition: new import_three9.Uniform(new import_three9.Vector2())
        },
        blending: import_three9.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: depth_copy_default,
        vertexShader: depth_copy_default2
      });
      this.depthCopyMode = DepthCopyMode.FULL;
    }
    /**
     * The input depth buffer.
     *
     * @type {Texture}
     */
    get depthBuffer() {
      return this.uniforms.depthBuffer.value;
    }
    set depthBuffer(value) {
      this.uniforms.depthBuffer.value = value;
    }
    /**
     * The input depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    set inputDepthPacking(value) {
      this.defines.INPUT_DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * The output depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    get outputDepthPacking() {
      return Number(this.defines.OUTPUT_DEPTH_PACKING);
    }
    set outputDepthPacking(value) {
      this.defines.OUTPUT_DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the input depth buffer.
     *
     * @deprecated Use depthBuffer and inputDepthPacking instead.
     * @param {Texture} buffer - The depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthBuffer(buffer, depthPacking = import_three9.BasicDepthPacking) {
      this.depthBuffer = buffer;
      this.inputDepthPacking = depthPacking;
    }
    /**
     * Returns the current input depth packing strategy.
     *
     * @deprecated
     * @return {DepthPackingStrategies} The input depth packing strategy.
     */
    getInputDepthPacking() {
      return Number(this.defines.INPUT_DEPTH_PACKING);
    }
    /**
     * Sets the input depth packing strategy.
     *
     * @deprecated Use inputDepthPacking instead.
     * @param {DepthPackingStrategies} value - The new input depth packing strategy.
     */
    setInputDepthPacking(value) {
      this.defines.INPUT_DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Returns the current output depth packing strategy.
     *
     * @deprecated Use outputDepthPacking instead.
     * @return {DepthPackingStrategies} The output depth packing strategy.
     */
    getOutputDepthPacking() {
      return Number(this.defines.OUTPUT_DEPTH_PACKING);
    }
    /**
     * Sets the output depth packing strategy.
     *
     * @deprecated Use outputDepthPacking instead.
     * @param {DepthPackingStrategies} value - The new output depth packing strategy.
     */
    setOutputDepthPacking(value) {
      this.defines.OUTPUT_DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * The screen space position used for single-texel copy operations.
     *
     * @type {Vector2}
     */
    get texelPosition() {
      return this.uniforms.texelPosition.value;
    }
    /**
     * Returns the screen space position used for single-texel copy operations.
     *
     * @deprecated Use texelPosition instead.
     * @return {Vector2} The position.
     */
    getTexelPosition() {
      return this.uniforms.texelPosition.value;
    }
    /**
     * Sets the screen space position used for single-texel copy operations.
     *
     * @deprecated
     * @param {Vector2} value - The position.
     */
    setTexelPosition(value) {
      this.uniforms.texelPosition.value = value;
    }
    /**
     * The depth copy mode.
     *
     * @type {DepthCopyMode}
     */
    get mode() {
      return this.depthCopyMode;
    }
    set mode(value) {
      this.depthCopyMode = value;
      this.defines.DEPTH_COPY_MODE = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Returns the depth copy mode.
     *
     * @deprecated Use mode instead.
     * @return {DepthCopyMode} The depth copy mode.
     */
    getMode() {
      return this.mode;
    }
    /**
     * Sets the depth copy mode.
     *
     * @deprecated Use mode instead.
     * @param {DepthCopyMode} value - The new mode.
     */
    setMode(value) {
      this.mode = value;
    }
  };


  var import_three10 = __require("three");





  var depth_downsampling_default2 = "uniform vec2 texelSize;\n\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\n\nvoid main() {\n\n	vec2 uv = position.xy * 0.5 + 0.5;\n\n	vUv0 = uv;\n	vUv1 = vec2(uv.x, uv.y + texelSize.y);\n	vUv2 = vec2(uv.x + texelSize.x, uv.y);\n	vUv3 = uv + texelSize;\n\n	gl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";


  var DepthDownsamplingMaterial = class extends import_three10.ShaderMaterial {
    /**
     * Constructs a new depth downsampling material.
     */
    constructor() {
      super({
        name: "DepthDownsamplingMaterial",
        defines: {
          DEPTH_PACKING: "0"
        },
        uniforms: {
          depthBuffer: new import_three10.Uniform(null),
          normalBuffer: new import_three10.Uniform(null),
          texelSize: new import_three10.Uniform(new import_three10.Vector2())
        },
        blending: import_three10.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: depth_downsampling_default,
        vertexShader: depth_downsampling_default2
      });
    }
    /**
     * The depth buffer.
     *
     * @type {Texture}
     */
    set depthBuffer(value) {
      this.uniforms.depthBuffer.value = value;
    }
    /**
     * The depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    set depthPacking(value) {
      this.defines.DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the depth buffer.
     *
     * @deprecated Use depthBuffer and depthPacking instead.
     * @param {Texture} buffer - The depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthBuffer(buffer, depthPacking = import_three10.BasicDepthPacking) {
      this.depthBuffer = buffer;
      this.depthPacking = depthPacking;
    }
    /**
     * The normal buffer.
     *
     * @type {Texture}
     */
    set normalBuffer(value) {
      this.uniforms.normalBuffer.value = value;
      if (value !== null) {
        this.defines.DOWNSAMPLE_NORMALS = "1";
      } else {
        delete this.defines.DOWNSAMPLE_NORMALS;
      }
      this.needsUpdate = true;
    }
    /**
     * Sets the normal buffer.
     *
     * @deprecated Use normalBuffer instead.
     * @param {Texture} value - The normal buffer.
     */
    setNormalBuffer(value) {
      this.normalBuffer = value;
    }
    /**
     * Sets the texel size.
     *
     * @deprecated Use setSize() instead.
     * @param {Number} x - The texel width.
     * @param {Number} y - The texel height.
     */
    setTexelSize(x, y) {
      this.uniforms.texelSize.value.set(x, y);
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.uniforms.texelSize.value.set(1 / width, 1 / height);
    }
  };


  var import_three11 = __require("three");





  var DepthMaskMaterial = class extends import_three11.ShaderMaterial {
    /**
     * Constructs a new depth mask material.
     */
    constructor() {
      super({
        name: "DepthMaskMaterial",
        defines: {
          DEPTH_EPSILON: "0.0001",
          DEPTH_PACKING_0: "0",
          DEPTH_PACKING_1: "0",
          DEPTH_TEST_STRATEGY: DepthTestStrategy.KEEP_MAX_DEPTH
        },
        uniforms: {
          inputBuffer: new import_three11.Uniform(null),
          depthBuffer0: new import_three11.Uniform(null),
          depthBuffer1: new import_three11.Uniform(null),
          cameraNearFar: new import_three11.Uniform(new import_three11.Vector2(1, 1))
        },
        blending: import_three11.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: depth_mask_default,
        vertexShader: common_default
      });
      this.depthMode = import_three11.LessDepth;
    }
    /**
     * The primary depth buffer.
     *
     * @type {Texture}
     */
    set depthBuffer0(value) {
      this.uniforms.depthBuffer0.value = value;
    }
    /**
     * The primary depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    set depthPacking0(value) {
      this.defines.DEPTH_PACKING_0 = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the base depth buffer.
     *
     * @deprecated Use depthBuffer0 and depthPacking0 instead.
     * @param {Texture} buffer - The depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthBuffer0(buffer, depthPacking = import_three11.BasicDepthPacking) {
      this.depthBuffer0 = buffer;
      this.depthPacking0 = depthPacking;
    }
    /**
     * The secondary depth buffer.
     *
     * @type {Texture}
     */
    set depthBuffer1(value) {
      this.uniforms.depthBuffer1.value = value;
    }
    /**
     * The secondary depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    set depthPacking1(value) {
      this.defines.DEPTH_PACKING_1 = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the depth buffer that will be compared with the base depth buffer.
     *
     * @deprecated Use depthBuffer1 and depthPacking1 instead.
     * @param {Texture} buffer - The depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthBuffer1(buffer, depthPacking = import_three11.BasicDepthPacking) {
      this.depthBuffer1 = buffer;
      this.depthPacking1 = depthPacking;
    }
    /**
     * The strategy for handling maximum depth.
     *
     * @type {DepthTestStrategy}
     */
    get maxDepthStrategy() {
      return Number(this.defines.DEPTH_TEST_STRATEGY);
    }
    set maxDepthStrategy(value) {
      this.defines.DEPTH_TEST_STRATEGY = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Indicates whether maximum depth values should be preserved.
     *
     * @type {Boolean}
     * @deprecated Use maxDepthStrategy instead.
     */
    get keepFar() {
      return this.maxDepthStrategy;
    }
    set keepFar(value) {
      this.maxDepthStrategy = value ? DepthTestStrategy.KEEP_MAX_DEPTH : DepthTestStrategy.DISCARD_MAX_DEPTH;
    }
    /**
     * Returns the strategy for dealing with maximum depth values.
     *
     * @deprecated Use maxDepthStrategy instead.
     * @return {DepthTestStrategy} The strategy.
     */
    getMaxDepthStrategy() {
      return this.maxDepthStrategy;
    }
    /**
     * Sets the strategy for dealing with maximum depth values.
     *
     * @deprecated Use maxDepthStrategy instead.
     * @param {DepthTestStrategy} value - The strategy.
     */
    setMaxDepthStrategy(value) {
      this.maxDepthStrategy = value;
    }
    /**
     * A small error threshold that is used for `EqualDepth` and `NotEqualDepth` tests. Default is `1e-4`.
     *
     * @type {Number}
     */
    get epsilon() {
      return Number(this.defines.DEPTH_EPSILON);
    }
    set epsilon(value) {
      this.defines.DEPTH_EPSILON = value.toFixed(16);
      this.needsUpdate = true;
    }
    /**
     * Returns the current error threshold for depth comparisons.
     *
     * @deprecated Use epsilon instead.
     * @return {Number} The error threshold.
     */
    getEpsilon() {
      return this.epsilon;
    }
    /**
     * Sets the depth comparison error threshold.
     *
     * @deprecated Use epsilon instead.
     * @param {Number} value - The new error threshold.
     */
    setEpsilon(value) {
      this.epsilon = value;
    }
    /**
     * The depth mode.
     *

     * @type {DepthModes}
     */
    get depthMode() {
      return Number(this.defines.DEPTH_MODE);
    }
    set depthMode(value) {
      let depthTest;
      switch (value) {
        case import_three11.NeverDepth:
          depthTest = "false";
          break;
        case import_three11.AlwaysDepth:
          depthTest = "true";
          break;
        case import_three11.EqualDepth:
          depthTest = "abs(d1 - d0) <= DEPTH_EPSILON";
          break;
        case import_three11.NotEqualDepth:
          depthTest = "abs(d1 - d0) > DEPTH_EPSILON";
          break;
        case import_three11.LessDepth:
          depthTest = "d0 > d1";
          break;
        case import_three11.LessEqualDepth:
          depthTest = "d0 >= d1";
          break;
        case import_three11.GreaterEqualDepth:
          depthTest = "d0 <= d1";
          break;
        case import_three11.GreaterDepth:
        default:
          depthTest = "d0 < d1";
          break;
      }
      this.defines.DEPTH_MODE = value.toFixed(0);
      this.defines["depthTest(d0, d1)"] = depthTest;
      this.needsUpdate = true;
    }
    /**
     * Returns the current depth mode.
     *
     * @deprecated Use depthMode instead.
     * @return {DepthModes} The depth mode. Default is `LessDepth`.
     */
    getDepthMode() {
      return this.depthMode;
    }
    /**
     * Sets the depth mode.
     *
     * @deprecated Use depthMode instead.
     * @param {DepthModes} mode - The depth mode.
     */
    setDepthMode(mode) {
      this.depthMode = mode;
    }
    /**
     * Copies the settings of the given camera.
     *
     * @deprecated Use copyCameraSettings instead.
     * @param {Camera} camera - A camera.
     */
    adoptCameraSettings(camera) {
      this.copyCameraSettings(camera);
    }
    /**
     * Copies the settings of the given camera.
     *
     * @param {Camera} camera - A camera.
     */
    copyCameraSettings(camera) {
      if (camera) {
        this.uniforms.cameraNearFar.value.set(camera.near, camera.far);
        if (camera instanceof import_three11.PerspectiveCamera) {
          this.defines.PERSPECTIVE_CAMERA = "1";
        } else {
          delete this.defines.PERSPECTIVE_CAMERA;
        }
        this.needsUpdate = true;
      }
    }
  };


  var import_three12 = __require("three");





  var convolution_downsampling_default2 = "uniform vec2 texelSize;\n\nvarying vec2 vUv;\nvarying vec2 vUv00;\nvarying vec2 vUv01;\nvarying vec2 vUv02;\nvarying vec2 vUv03;\nvarying vec2 vUv04;\nvarying vec2 vUv05;\nvarying vec2 vUv06;\nvarying vec2 vUv07;\nvarying vec2 vUv08;\nvarying vec2 vUv09;\nvarying vec2 vUv10;\nvarying vec2 vUv11;\n\nvoid main() {\n\n	vUv = position.xy * 0.5 + 0.5;\n\n	vUv00 = vUv + texelSize * vec2(-1.0, 1.0);\n	vUv01 = vUv + texelSize * vec2(1.0, 1.0);\n	vUv02 = vUv + texelSize * vec2(-1.0, -1.0);\n	vUv03 = vUv + texelSize * vec2(1.0, -1.0);\n\n	vUv04 = vUv + texelSize * vec2(-2.0, 2.0);\n	vUv05 = vUv + texelSize * vec2(0.0, 2.0);\n	vUv06 = vUv + texelSize * vec2(2.0, 2.0);\n	vUv07 = vUv + texelSize * vec2(-2.0, 0.0);\n	vUv08 = vUv + texelSize * vec2(2.0, 0.0);\n	vUv09 = vUv + texelSize * vec2(-2.0, -2.0);\n	vUv10 = vUv + texelSize * vec2(0.0, -2.0);\n	vUv11 = vUv + texelSize * vec2(2.0, -2.0);\n\n	gl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";


  var DownsamplingMaterial = class extends import_three12.ShaderMaterial {
    /**
     * Constructs a new downsampling material.
     */
    constructor() {
      super({
        name: "DownsamplingMaterial",
        uniforms: {
          inputBuffer: new import_three12.Uniform(null),
          texelSize: new import_three12.Uniform(new import_three12.Vector2())
        },
        blending: import_three12.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: convolution_downsampling_default,
        vertexShader: convolution_downsampling_default2
      });
      this.fragmentShader = updateFragmentShader(this.fragmentShader);
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.uniforms.texelSize.value.set(1 / width, 1 / height);
    }
  };


  var import_three13 = __require("three");








  var EdgeDetectionMaterial = class extends import_three13.ShaderMaterial {
    /**
     * Constructs a new edge detection material.
     *
     * TODO Remove parameters.
     * @param {Vector2} [texelSize] - The screen texel size.
     * @param {EdgeDetectionMode} [mode=EdgeDetectionMode.COLOR] - The edge detection mode.
     */
    constructor(texelSize = new import_three13.Vector2(), mode = EdgeDetectionMode.COLOR) {
      super({
        name: "EdgeDetectionMaterial",
        defines: {
          THREE_REVISION: import_three13.REVISION.replace(/\D+/g, ""),
          LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0",
          EDGE_THRESHOLD: "0.1",
          DEPTH_THRESHOLD: "0.01",
          PREDICATION_MODE: "0",
          PREDICATION_THRESHOLD: "0.01",
          PREDICATION_SCALE: "2.0",
          PREDICATION_STRENGTH: "1.0",
          DEPTH_PACKING: "0"
        },
        uniforms: {
          inputBuffer: new import_three13.Uniform(null),
          depthBuffer: new import_three13.Uniform(null),
          predicationBuffer: new import_three13.Uniform(null),
          texelSize: new import_three13.Uniform(texelSize)
        },
        blending: import_three13.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: edge_detection_default,
        vertexShader: edge_detection_default2
      });
      this.edgeDetectionMode = mode;
    }
    /**
     * The depth buffer.
     *
     * @type {Texture}
     */
    set depthBuffer(value) {
      this.uniforms.depthBuffer.value = value;
    }
    /**
     * The depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    set depthPacking(value) {
      this.defines.DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the depth buffer.
     *
     * @deprecated Use depthBuffer and depthPacking instead.
     * @param {Texture} buffer - The depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthBuffer(buffer, depthPacking = import_three13.BasicDepthPacking) {
      this.depthBuffer = buffer;
      this.depthPacking = depthPacking;
    }
    /**
     * The edge detection mode.
     *
     * @type {EdgeDetectionMode}
     */
    get edgeDetectionMode() {
      return Number(this.defines.EDGE_DETECTION_MODE);
    }
    set edgeDetectionMode(value) {
      this.defines.EDGE_DETECTION_MODE = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Returns the edge detection mode.
     *
     * @deprecated Use edgeDetectionMode instead.
     * @return {EdgeDetectionMode} The mode.
     */
    getEdgeDetectionMode() {
      return this.edgeDetectionMode;
    }
    /**
     * Sets the edge detection mode.
     *
     * @deprecated Use edgeDetectionMode instead.
     * @param {EdgeDetectionMode} value - The edge detection mode.
     */
    setEdgeDetectionMode(value) {
      this.edgeDetectionMode = value;
    }
    /**
     * The local contrast adaptation factor. Has no effect if the edge detection mode is set to DEPTH. Default is 2.0.
     *
     * If a neighbor edge has _factor_ times bigger contrast than the current edge, the edge will be discarded.
     *
     * This allows to eliminate spurious crossing edges and is based on the fact that if there is too much contrast in a
     * direction, the perceptual contrast in the other neighbors will be hidden.
     *
     * @type {Number}
     */
    get localContrastAdaptationFactor() {
      return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR);
    }
    set localContrastAdaptationFactor(value) {
      this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR = value.toFixed("6");
      this.needsUpdate = true;
    }
    /**
     * Returns the local contrast adaptation factor.
     *
     * @deprecated Use localContrastAdaptationFactor instead.
     * @return {Number} The factor.
     */
    getLocalContrastAdaptationFactor() {
      return this.localContrastAdaptationFactor;
    }
    /**
     * Sets the local contrast adaptation factor. Has no effect if the edge detection mode is set to DEPTH.
     *
     * @deprecated Use localContrastAdaptationFactor instead.
     * @param {Number} value - The local contrast adaptation factor. Default is 2.0.
     */
    setLocalContrastAdaptationFactor(value) {
      this.localContrastAdaptationFactor = value;
    }
    /**
     * The edge detection threshold. Range: [0.0, 0.5].
     *
     * A lower value results in more edges being detected at the expense of performance.
     *
     * For luma- and chroma-based edge detection, 0.1 is a reasonable value and allows to catch most visible edges. 0.05
     * is a rather overkill value that allows to catch 'em all. Darker scenes may require an even lower threshold.
     *
     * If depth-based edge detection is used, the threshold will depend on the scene depth.
     *
     * @type {Number}
     */
    get edgeDetectionThreshold() {
      return Number(this.defines.EDGE_THRESHOLD);
    }
    set edgeDetectionThreshold(value) {
      this.defines.EDGE_THRESHOLD = value.toFixed("6");
      this.defines.DEPTH_THRESHOLD = (value * 0.1).toFixed("6");
      this.needsUpdate = true;
    }
    /**
     * Returns the edge detection threshold.
     *
     * @deprecated Use edgeDetectionThreshold instead.
     * @return {Number} The threshold.
     */
    getEdgeDetectionThreshold() {
      return this.edgeDetectionThreshold;
    }
    /**
     * Sets the edge detection threshold.
     *
     * @deprecated Use edgeDetectionThreshold instead.
     * @param {Number} value - The edge detection threshold. Range: [0.0, 0.5].
     */
    setEdgeDetectionThreshold(value) {
      this.edgeDetectionThreshold = value;
    }
    /**
     * The predication mode.
     *
     * Predicated thresholding allows to better preserve texture details and to improve edge detection using an additional
     * buffer such as a light accumulation or depth buffer.
     *
     * @type {PredicationMode}
     */
    get predicationMode() {
      return Number(this.defines.PREDICATION_MODE);
    }
    set predicationMode(value) {
      this.defines.PREDICATION_MODE = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Returns the predication mode.
     *
     * @deprecated Use predicationMode instead.
     * @return {PredicationMode} The mode.
     */
    getPredicationMode() {
      return this.predicationMode;
    }
    /**
     * Sets the predication mode.
     *
     * @deprecated Use predicationMode instead.
     * @param {PredicationMode} value - The predication mode.
     */
    setPredicationMode(value) {
      this.predicationMode = value;
    }
    /**
     * The predication buffer.
     *
     * @type {Texture}
     */
    set predicationBuffer(value) {
      this.uniforms.predicationBuffer.value = value;
    }
    /**
     * Sets a custom predication buffer.
     *
     * @deprecated Use predicationBuffer instead.
     * @param {Texture} value - The predication buffer.
     */
    setPredicationBuffer(value) {
      this.uniforms.predicationBuffer.value = value;
    }
    /**
     * The predication threshold.
     *
     * @type {Number}
     */
    get predicationThreshold() {
      return Number(this.defines.PREDICATION_THRESHOLD);
    }
    set predicationThreshold(value) {
      this.defines.PREDICATION_THRESHOLD = value.toFixed("6");
      this.needsUpdate = true;
    }
    /**
     * Returns the predication threshold.
     *
     * @deprecated Use predicationThreshold instead.
     * @return {Number} The threshold.
     */
    getPredicationThreshold() {
      return this.predicationThreshold;
    }
    /**
     * Sets the predication threshold.
     *
     * @deprecated Use predicationThreshold instead.
     * @param {Number} value - The threshold.
     */
    setPredicationThreshold(value) {
      this.predicationThreshold = value;
    }
    /**
     * The predication scale. Range: [1.0, 5.0].
     *
     * Determines how much the edge detection threshold should be scaled when using predication.
     *
     * @type {Boolean|Texture|Number}
     */
    get predicationScale() {
      return Number(this.defines.PREDICATION_SCALE);
    }
    set predicationScale(value) {
      this.defines.PREDICATION_SCALE = value.toFixed("6");
      this.needsUpdate = true;
    }
    /**
     * Returns the predication scale.
     *
     * @deprecated Use predicationScale instead.
     * @return {Number} The scale.
     */
    getPredicationScale() {
      return this.predicationScale;
    }
    /**
     * Sets the predication scale.
     *
     * @deprecated Use predicationScale instead.
     * @param {Number} value - The scale. Range: [1.0, 5.0].
     */
    setPredicationScale(value) {
      this.predicationScale = value;
    }
    /**
     * The predication strength. Range: [0.0, 1.0].
     *
     * Determines how much the edge detection threshold should be decreased locally when using predication.
     *
     * @type {Number}
     */
    get predicationStrength() {
      return Number(this.defines.PREDICATION_STRENGTH);
    }
    set predicationStrength(value) {
      this.defines.PREDICATION_STRENGTH = value.toFixed("6");
      this.needsUpdate = true;
    }
    /**
     * Returns the predication strength.
     *
     * @deprecated Use predicationStrength instead.
     * @return {Number} The strength.
     */
    getPredicationStrength() {
      return this.predicationStrength;
    }
    /**
     * Sets the predication strength.
     *
     * @deprecated Use predicationStrength instead.
     * @param {Number} value - The strength. Range: [0.0, 1.0].
     */
    setPredicationStrength(value) {
      this.predicationStrength = value;
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.uniforms.texelSize.value.set(1 / width, 1 / height);
    }
  };


  var import_three14 = __require("three");





  var effect_default2 = "uniform vec2 resolution;\nuniform vec2 texelSize;\n\nuniform float cameraNear;\nuniform float cameraFar;\nuniform float aspect;\nuniform float time;\n\nvarying vec2 vUv;\n\nVERTEX_HEAD\n\nvoid main() {\n\n	vUv = position.xy * 0.5 + 0.5;\n\n	VERTEX_MAIN_SUPPORT\n\n	gl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";


  var EffectMaterial = class extends import_three14.ShaderMaterial {
    /**
     * Constructs a new effect material.
     *
     * @param {Map<String, String>} [shaderParts] - Deprecated. Use setShaderData instead.
     * @param {Map<String, String>} [defines] - Deprecated. Use setShaderData instead.
     * @param {Map<String, Uniform>} [uniforms] - Deprecated. Use setShaderData instead.
     * @param {Camera} [camera] - A camera.
     * @param {Boolean} [dithering=false] - Deprecated.
     */
    constructor(shaderParts, defines, uniforms, camera, dithering = false) {
      super({
        name: "EffectMaterial",
        defines: {
          THREE_REVISION: import_three14.REVISION.replace(/\D+/g, ""),
          DEPTH_PACKING: "0",
          ENCODE_OUTPUT: "1"
        },
        uniforms: {
          inputBuffer: new import_three14.Uniform(null),
          depthBuffer: new import_three14.Uniform(null),
          resolution: new import_three14.Uniform(new import_three14.Vector2()),
          texelSize: new import_three14.Uniform(new import_three14.Vector2()),
          cameraNear: new import_three14.Uniform(0.3),
          cameraFar: new import_three14.Uniform(1e3),
          aspect: new import_three14.Uniform(1),
          time: new import_three14.Uniform(0)
        },
        blending: import_three14.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        dithering
      });
      if (shaderParts) {
        this.setShaderParts(shaderParts);
      }
      if (defines) {
        this.setDefines(defines);
      }
      if (uniforms) {
        this.setUniforms(uniforms);
      }
      this.copyCameraSettings(camera);
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Texture} value - The input buffer.
     */
    setInputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * The depth buffer.
     *
     * @type {Texture}
     */
    get depthBuffer() {
      return this.uniforms.depthBuffer.value;
    }
    set depthBuffer(value) {
      this.uniforms.depthBuffer.value = value;
    }
    /**
     * The depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    get depthPacking() {
      return Number(this.defines.DEPTH_PACKING);
    }
    set depthPacking(value) {
      this.defines.DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the depth buffer.
     *
     * @deprecated Use depthBuffer and depthPacking instead.
     * @param {Texture} buffer - The depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthBuffer(buffer, depthPacking = import_three14.BasicDepthPacking) {
      this.depthBuffer = buffer;
      this.depthPacking = depthPacking;
    }
    /**
     * Sets the shader data.
     *
     * @param {EffectShaderData} data - The shader data.
     * @return {EffectMaterial} This material.
     */
    setShaderData(data) {
      this.setShaderParts(data.shaderParts);
      this.setDefines(data.defines);
      this.setUniforms(data.uniforms);
      this.setExtensions(data.extensions);
    }
    /**
     * Sets the shader parts.
     *
     * @deprecated Use setShaderData instead.
     * @param {Map<String, String>} shaderParts - A collection of shader snippets. See {@link EffectShaderSection}.
     * @return {EffectMaterial} This material.
     */
    setShaderParts(shaderParts) {
      this.fragmentShader = effect_default.replace(EffectShaderSection.FRAGMENT_HEAD, shaderParts.get(EffectShaderSection.FRAGMENT_HEAD) || "").replace(EffectShaderSection.FRAGMENT_MAIN_UV, shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_UV) || "").replace(EffectShaderSection.FRAGMENT_MAIN_IMAGE, shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_IMAGE) || "");
      this.vertexShader = effect_default2.replace(EffectShaderSection.VERTEX_HEAD, shaderParts.get(EffectShaderSection.VERTEX_HEAD) || "").replace(EffectShaderSection.VERTEX_MAIN_SUPPORT, shaderParts.get(EffectShaderSection.VERTEX_MAIN_SUPPORT) || "");
      this.fragmentShader = updateFragmentShader(this.fragmentShader);
      this.needsUpdate = true;
      return this;
    }
    /**
     * Sets the shader macros.
     *
     * @deprecated Use setShaderData instead.
     * @param {Map<String, String>} defines - A collection of preprocessor macro definitions.
     * @return {EffectMaterial} This material.
     */
    setDefines(defines) {
      for (const entry of defines.entries()) {
        this.defines[entry[0]] = entry[1];
      }
      this.needsUpdate = true;
      return this;
    }
    /**
     * Sets the shader uniforms.
     *
     * @deprecated Use setShaderData instead.
     * @param {Map<String, Uniform>} uniforms - A collection of uniforms.
     * @return {EffectMaterial} This material.
     */
    setUniforms(uniforms) {
      for (const entry of uniforms.entries()) {
        this.uniforms[entry[0]] = entry[1];
      }
      return this;
    }
    /**
     * Sets the required shader extensions.
     *
     * @deprecated Use setShaderData instead.
     * @param {Set<WebGLExtension>} extensions - A collection of extensions.
     * @return {EffectMaterial} This material.
     */
    setExtensions(extensions) {
      this.extensions = {};
      for (const extension of extensions) {
        this.extensions[extension] = true;
      }
      return this;
    }
    /**
     * Indicates whether output encoding is enabled.
     *
     * @type {Boolean}
     */
    get encodeOutput() {
      return this.defines.ENCODE_OUTPUT !== void 0;
    }
    set encodeOutput(value) {
      if (this.encodeOutput !== value) {
        if (value) {
          this.defines.ENCODE_OUTPUT = "1";
        } else {
          delete this.defines.ENCODE_OUTPUT;
        }
        this.needsUpdate = true;
      }
    }
    /**
     * Indicates whether output encoding is enabled.
     *
     * @deprecated Use encodeOutput instead.
     * @return {Boolean} Whether output encoding is enabled.
     */
    isOutputEncodingEnabled(value) {
      return this.encodeOutput;
    }
    /**
     * Enables or disables output encoding.
     *
     * @deprecated Use encodeOutput instead.
     * @param {Boolean} value - Whether output encoding should be enabled.
     */
    setOutputEncodingEnabled(value) {
      this.encodeOutput = value;
    }
    /**
     * The time in seconds.
     *
     * @type {Number}
     */
    get time() {
      return this.uniforms.time.value;
    }
    set time(value) {
      this.uniforms.time.value = value;
    }
    /**
     * Sets the delta time.
     *
     * @deprecated Use time instead.
     * @param {Number} value - The delta time in seconds.
     */
    setDeltaTime(value) {
      this.uniforms.time.value += value;
    }
    /**
     * Copies the settings of the given camera.
     *
     * @deprecated Use copyCameraSettings instead.
     * @param {Camera} camera - A camera.
     */
    adoptCameraSettings(camera) {
      this.copyCameraSettings(camera);
    }
    /**
     * Copies the settings of the given camera.
     *
     * @param {Camera} camera - A camera.
     */
    copyCameraSettings(camera) {
      if (camera) {
        this.uniforms.cameraNear.value = camera.near;
        this.uniforms.cameraFar.value = camera.far;
        if (camera instanceof import_three14.PerspectiveCamera) {
          this.defines.PERSPECTIVE_CAMERA = "1";
        } else {
          delete this.defines.PERSPECTIVE_CAMERA;
        }
        this.needsUpdate = true;
      }
    }
    /**
     * Sets the resolution.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const uniforms = this.uniforms;
      uniforms.resolution.value.set(width, height);
      uniforms.texelSize.value.set(1 / width, 1 / height);
      uniforms.aspect.value = width / height;
    }
    /**
     * An enumeration of shader code placeholders.
     *
     * @deprecated Use EffectShaderSection instead.
     * @type {Object}
     */
    static get Section() {
      return EffectShaderSection;
    }
  };


  var import_three15 = __require("three");


  var convolution_gaussian_default = "#ifdef FRAMEBUFFER_PRECISION_HIGH\n\n	uniform mediump sampler2D inputBuffer;\n\n#else\n\n	uniform lowp sampler2D inputBuffer;\n\n#endif\n\nuniform vec2 kernel[STEPS];\n\nvarying vec2 vOffset;\nvarying vec2 vUv;\n\nvoid main() {\n\n	vec4 result = texture2D(inputBuffer, vUv) * kernel[0].y;\n\n	for(int i = 1; i < STEPS; ++i) {\n\n		vec2 offset = kernel[i].x * vOffset;\n		vec4 c0 = texture2D(inputBuffer, vUv + offset);\n		vec4 c1 = texture2D(inputBuffer, vUv - offset);\n		result += (c0 + c1) * kernel[i].y;\n\n	}\n\n	gl_FragColor = result;\n\n	#include <colorspace_fragment>\n\n}\n";


  var convolution_gaussian_default2 = "uniform vec2 texelSize;\nuniform vec2 direction;\nuniform float scale;\n\nvarying vec2 vOffset;\nvarying vec2 vUv;\n\nvoid main() {\n\n	vOffset = direction * texelSize * scale;\n	vUv = position.xy * 0.5 + 0.5;\n	gl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";


  var GaussianBlurMaterial = class extends import_three15.ShaderMaterial {
    /**
     * Constructs a new convolution material.
     *
     * @param {Object} [options] - The options.
     * @param {Number} [options.kernelSize=35] - The kernel size.
     */
    constructor({ kernelSize = 35 } = {}) {
      super({
        name: "GaussianBlurMaterial",
        uniforms: {
          inputBuffer: new import_three15.Uniform(null),
          texelSize: new import_three15.Uniform(new import_three15.Vector2()),
          direction: new import_three15.Uniform(new import_three15.Vector2()),
          kernel: new import_three15.Uniform(null),
          scale: new import_three15.Uniform(1)
        },
        blending: import_three15.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: convolution_gaussian_default,
        vertexShader: convolution_gaussian_default2
      });
      this.fragmentShader = updateFragmentShader(this.fragmentShader);
      this._kernelSize = 0;
      this.kernelSize = kernelSize;
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * The kernel size.
     *
     * @type {Number}
     */
    get kernelSize() {
      return this._kernelSize;
    }
    set kernelSize(value) {
      this._kernelSize = value;
      this.generateKernel(value);
    }
    /**
     * The blur direction.
     *
     * @type {Vector2}
     */
    get direction() {
      return this.uniforms.direction.value;
    }
    /**
     * The blur kernel scale. Values greater than 1.0 may introduce artifacts.
     *
     * @type {Number}
     */
    get scale() {
      return this.uniforms.scale.value;
    }
    set scale(value) {
      this.uniforms.scale.value = value;
    }
    /**
     * Generates the Gauss kernel.
     *
     * @param {KernelSize} kernelSize - The kernel size. Should be an odd number.
     * @private
     */
    generateKernel(kernelSize) {
      const kernel = new GaussKernel(kernelSize);
      const steps = kernel.linearSteps;
      const kernelData = new Float64Array(steps * 2);
      for (let i = 0, j = 0; i < steps; ++i) {
        kernelData[j++] = kernel.linearOffsets[i];
        kernelData[j++] = kernel.linearWeights[i];
      }
      this.uniforms.kernel.value = kernelData;
      this.defines.STEPS = steps.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.uniforms.texelSize.value.set(1 / width, 1 / height);
    }
  };


  var import_three16 = __require("three");





  var GodRaysMaterial = class extends import_three16.ShaderMaterial {
    /**
     * Constructs a new god rays material.
     *
     * TODO Remove lightPosition param.
     * @param {Vector2} lightPosition - Deprecated.
     */
    constructor(lightPosition) {
      super({
        name: "GodRaysMaterial",
        defines: {
          SAMPLES_INT: "60",
          SAMPLES_FLOAT: "60.0"
        },
        uniforms: {
          inputBuffer: new import_three16.Uniform(null),
          lightPosition: new import_three16.Uniform(lightPosition),
          density: new import_three16.Uniform(1),
          decay: new import_three16.Uniform(1),
          weight: new import_three16.Uniform(1),
          exposure: new import_three16.Uniform(1),
          clampMax: new import_three16.Uniform(1)
        },
        blending: import_three16.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: convolution_god_rays_default,
        vertexShader: common_default
      });
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Texture} value - The input buffer.
     */
    setInputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * The screen space position of the light source.
     *
     * @type {Vector2}
     */
    get lightPosition() {
      return this.uniforms.lightPosition.value;
    }
    /**
     * Returns the screen space position of the light source.
     *
     * @deprecated Use lightPosition instead.
     * @return {Vector2} The position.
     */
    getLightPosition() {
      return this.uniforms.lightPosition.value;
    }
    /**
     * Sets the screen space position of the light source.
     *
     * @deprecated Use lightPosition instead.
     * @param {Vector2} value - The position.
     */
    setLightPosition(value) {
      this.uniforms.lightPosition.value = value;
    }
    /**
     * The density.
     *
     * @type {Number}
     */
    get density() {
      return this.uniforms.density.value;
    }
    set density(value) {
      this.uniforms.density.value = value;
    }
    /**
     * Returns the density.
     *
     * @deprecated Use density instead.
     * @return {Number} The density.
     */
    getDensity() {
      return this.uniforms.density.value;
    }
    /**
     * Sets the density.
     *
     * @deprecated Use density instead.
     * @param {Number} value - The density.
     */
    setDensity(value) {
      this.uniforms.density.value = value;
    }
    /**
     * The decay.
     *
     * @type {Number}
     */
    get decay() {
      return this.uniforms.decay.value;
    }
    set decay(value) {
      this.uniforms.decay.value = value;
    }
    /**
     * Returns the decay.
     *
     * @deprecated Use decay instead.
     * @return {Number} The decay.
     */
    getDecay() {
      return this.uniforms.decay.value;
    }
    /**
     * Sets the decay.
     *
     * @deprecated Use decay instead.
     * @param {Number} value - The decay.
     */
    setDecay(value) {
      this.uniforms.decay.value = value;
    }
    /**
     * The weight.
     *
     * @type {Number}
     */
    get weight() {
      return this.uniforms.weight.value;
    }
    set weight(value) {
      this.uniforms.weight.value = value;
    }
    /**
     * Returns the weight.
     *
     * @deprecated Use weight instead.
     * @return {Number} The weight.
     */
    getWeight() {
      return this.uniforms.weight.value;
    }
    /**
     * Sets the weight.
     *
     * @deprecated Use weight instead.
     * @param {Number} value - The weight.
     */
    setWeight(value) {
      this.uniforms.weight.value = value;
    }
    /**
     * The exposure.
     *
     * @type {Number}
     */
    get exposure() {
      return this.uniforms.exposure.value;
    }
    set exposure(value) {
      this.uniforms.exposure.value = value;
    }
    /**
     * Returns the exposure.
     *
     * @deprecated Use exposure instead.
     * @return {Number} The exposure.
     */
    getExposure() {
      return this.uniforms.exposure.value;
    }
    /**
     * Sets the exposure.
     *
     * @deprecated Use exposure instead.
     * @param {Number} value - The exposure.
     */
    setExposure(value) {
      this.uniforms.exposure.value = value;
    }
    /**
     * The maximum light intensity.
     *
     * @type {Number}
     */
    get maxIntensity() {
      return this.uniforms.clampMax.value;
    }
    set maxIntensity(value) {
      this.uniforms.clampMax.value = value;
    }
    /**
     * Returns the maximum light intensity.
     *
     * @deprecated Use maxIntensity instead.
     * @return {Number} The maximum light intensity.
     */
    getMaxIntensity() {
      return this.uniforms.clampMax.value;
    }
    /**
     * Sets the maximum light intensity.
     *
     * @deprecated Use maxIntensity instead.
     * @param {Number} value - The maximum light intensity.
     */
    setMaxIntensity(value) {
      this.uniforms.clampMax.value = value;
    }
    /**
     * The amount of samples per pixel.
     *
     * @type {Number}
     */
    get samples() {
      return Number(this.defines.SAMPLES_INT);
    }
    set samples(value) {
      const s = Math.floor(value);
      this.defines.SAMPLES_INT = s.toFixed(0);
      this.defines.SAMPLES_FLOAT = s.toFixed(1);
      this.needsUpdate = true;
    }
    /**
     * Returns the amount of samples per pixel.
     *
     * @deprecated Use samples instead.
     * @return {Number} The sample count.
     */
    getSamples() {
      return this.samples;
    }
    /**
     * Sets the amount of samples per pixel.
     *
     * @deprecated Use samples instead.
     * @param {Number} value - The sample count.
     */
    setSamples(value) {
      this.samples = value;
    }
  };


  var import_three17 = __require("three");





  var LuminanceMaterial = class extends import_three17.ShaderMaterial {
    /**
     * Constructs a new luminance material.
     *
     * @param {Boolean} [colorOutput=false] - Defines whether the shader should output colors scaled with their luminance value.
     * @param {Vector2} [luminanceRange] - If provided, the shader will mask out texels that aren't in the specified luminance range.
     */
    constructor(colorOutput = false, luminanceRange = null) {
      super({
        name: "LuminanceMaterial",
        defines: {
          THREE_REVISION: import_three17.REVISION.replace(/\D+/g, "")
        },
        uniforms: {
          inputBuffer: new import_three17.Uniform(null),
          threshold: new import_three17.Uniform(0),
          smoothing: new import_three17.Uniform(1),
          range: new import_three17.Uniform(null)
        },
        blending: import_three17.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: luminance_default,
        vertexShader: common_default
      });
      this.colorOutput = colorOutput;
      this.luminanceRange = luminanceRange;
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Texture} value - The input buffer.
     */
    setInputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * The luminance threshold.
     *
     * @type {Number}
     */
    get threshold() {
      return this.uniforms.threshold.value;
    }
    set threshold(value) {
      if (this.smoothing > 0 || value > 0) {
        this.defines.THRESHOLD = "1";
      } else {
        delete this.defines.THRESHOLD;
      }
      this.uniforms.threshold.value = value;
    }
    /**
     * Returns the luminance threshold.
     *
     * @deprecated Use threshold instead.
     * @return {Number} The threshold.
     */
    getThreshold() {
      return this.threshold;
    }
    /**
     * Sets the luminance threshold.
     *
     * @deprecated Use threshold instead.
     * @param {Number} value - The threshold.
     */
    setThreshold(value) {
      this.threshold = value;
    }
    /**
     * The luminance threshold smoothing.
     *
     * @type {Number}
     */
    get smoothing() {
      return this.uniforms.smoothing.value;
    }
    set smoothing(value) {
      if (this.threshold > 0 || value > 0) {
        this.defines.THRESHOLD = "1";
      } else {
        delete this.defines.THRESHOLD;
      }
      this.uniforms.smoothing.value = value;
    }
    /**
     * Returns the luminance threshold smoothing factor.
     *
     * @deprecated Use smoothing instead.
     * @return {Number} The smoothing factor.
     */
    getSmoothingFactor() {
      return this.smoothing;
    }
    /**
     * Sets the luminance threshold smoothing factor.
     *
     * @deprecated Use smoothing instead.
     * @param {Number} value - The smoothing factor.
     */
    setSmoothingFactor(value) {
      this.smoothing = value;
    }
    /**
     * Indicates whether the luminance threshold is enabled.
     *
     * @type {Boolean}
     * @deprecated Adjust the threshold or smoothing factor instead.
     */
    get useThreshold() {
      return this.threshold > 0 || this.smoothing > 0;
    }
    set useThreshold(value) {
    }
    /**
     * Indicates whether color output is enabled.
     *
     * @type {Boolean}
     */
    get colorOutput() {
      return this.defines.COLOR !== void 0;
    }
    set colorOutput(value) {
      if (value) {
        this.defines.COLOR = "1";
      } else {
        delete this.defines.COLOR;
      }
      this.needsUpdate = true;
    }
    /**
     * Indicates whether color output is enabled.
     *
     * @deprecated Use colorOutput instead.
     * @return {Boolean} Whether color output is enabled.
     */
    isColorOutputEnabled(value) {
      return this.colorOutput;
    }
    /**
     * Enables or disables color output.
     *
     * @deprecated Use colorOutput instead.
     * @param {Boolean} value - Whether color output should be enabled.
     */
    setColorOutputEnabled(value) {
      this.colorOutput = value;
    }
    /**
     * Indicates whether luminance masking is enabled.
     *
     * @type {Boolean}
     * @deprecated
     */
    get useRange() {
      return this.luminanceRange !== null;
    }
    set useRange(value) {
      this.luminanceRange = null;
    }
    /**
     * The luminance range. Set to null to disable.
     *
     * @type {Boolean}
     */
    get luminanceRange() {
      return this.uniforms.range.value;
    }
    set luminanceRange(value) {
      if (value !== null) {
        this.defines.RANGE = "1";
      } else {
        delete this.defines.RANGE;
      }
      this.uniforms.range.value = value;
      this.needsUpdate = true;
    }
    /**
     * Returns the current luminance range.
     *
     * @deprecated Use luminanceRange instead.
     * @return {Vector2} The luminance range.
     */
    getLuminanceRange() {
      return this.luminanceRange;
    }
    /**
     * Sets a luminance range. Set to null to disable.
     *
     * @deprecated Use luminanceRange instead.
     * @param {Vector2} value - The luminance range.
     */
    setLuminanceRange(value) {
      this.luminanceRange = value;
    }
  };


  var import_three18 = __require("three");





  var MaskMaterial = class extends import_three18.ShaderMaterial {
    /**
     * Constructs a new mask material.
     *
     * @param {Texture} [maskTexture] - The mask texture.
     */
    constructor(maskTexture = null) {
      super({
        name: "MaskMaterial",
        uniforms: {
          maskTexture: new import_three18.Uniform(maskTexture),
          inputBuffer: new import_three18.Uniform(null),
          strength: new import_three18.Uniform(1)
        },
        blending: import_three18.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: mask_default,
        vertexShader: common_default
      });
      this.colorChannel = ColorChannel.RED;
      this.maskFunction = MaskFunction.DISCARD;
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Texture} value - The input buffer.
     */
    setInputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * The mask texture.
     *
     * @type {Texture}
     */
    set maskTexture(value) {
      this.uniforms.maskTexture.value = value;
      delete this.defines.MASK_PRECISION_HIGH;
      if (value.type !== import_three18.UnsignedByteType) {
        this.defines.MASK_PRECISION_HIGH = "1";
      }
      this.needsUpdate = true;
    }
    /**
     * Sets the mask texture.
     *
     * @deprecated Use maskTexture instead.
     * @param {Texture} value - The texture.
     */
    setMaskTexture(value) {
      this.maskTexture = value;
    }
    /**
     * Sets the color channel to use for masking. Default is `ColorChannel.RED`.
     *
     * @type {ColorChannel}
     */
    set colorChannel(value) {
      this.defines.COLOR_CHANNEL = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the color channel to use for masking. Default is `ColorChannel.RED`.
     *
     * @deprecated Use colorChannel instead.
     * @param {ColorChannel} value - The channel.
     */
    setColorChannel(value) {
      this.colorChannel = value;
    }
    /**
     * The masking technique. Default is `MaskFunction.DISCARD`.
     *
     * @type {MaskFunction}
     */
    set maskFunction(value) {
      this.defines.MASK_FUNCTION = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the masking technique. Default is `MaskFunction.DISCARD`.
     *
     * @deprecated Use maskFunction instead.
     * @param {MaskFunction} value - The function.
     */
    setMaskFunction(value) {
      this.maskFunction = value;
    }
    /**
     * Indicates whether the masking is inverted.
     *
     * @type {Boolean}
     */
    get inverted() {
      return this.defines.INVERTED !== void 0;
    }
    set inverted(value) {
      if (this.inverted && !value) {
        delete this.defines.INVERTED;
      } else if (value) {
        this.defines.INVERTED = "1";
      }
      this.needsUpdate = true;
    }
    /**
     * Indicates whether the masking is inverted.
     *
     * @deprecated Use inverted instead.
     * @return {Boolean} Whether the masking is inverted.
     */
    isInverted() {
      return this.inverted;
    }
    /**
     * Determines whether the masking should be inverted.
     *
     * @deprecated Use inverted instead.
     * @param {Boolean} value - Whether the masking should be inverted.
     */
    setInverted(value) {
      this.inverted = value;
    }
    /**
     * The current mask strength.
     *
     * Individual mask values will be clamped to [0.0, 1.0]. Has no effect when the mask function is set to `DISCARD`.
     *
     * @type {Number}
     */
    get strength() {
      return this.uniforms.strength.value;
    }
    set strength(value) {
      this.uniforms.strength.value = value;
    }
    /**
     * Returns the current mask strength.
     *
     * @deprecated Use strength instead.
     * @return {Number} The mask strength.
     */
    getStrength() {
      return this.strength;
    }
    /**
     * Sets the mask strength.
     *
     * Has no effect when the mask function is set to `DISCARD`.
     *
     * @deprecated Use strength instead.
     * @param {Number} value - The mask strength.
     */
    setStrength(value) {
      this.strength = value;
    }
  };


  var import_three19 = __require("three");


  var outline_default = "uniform lowp sampler2D inputBuffer;\n\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\n\nvoid main() {\n\n	vec2 c0 = texture2D(inputBuffer, vUv0).rg;\n	vec2 c1 = texture2D(inputBuffer, vUv1).rg;\n	vec2 c2 = texture2D(inputBuffer, vUv2).rg;\n	vec2 c3 = texture2D(inputBuffer, vUv3).rg;\n\n	float d0 = (c0.x - c1.x) * 0.5;\n	float d1 = (c2.x - c3.x) * 0.5;\n	float d = length(vec2(d0, d1));\n\n	float a0 = min(c0.y, c1.y);\n	float a1 = min(c2.y, c3.y);\n	float visibilityFactor = min(a0, a1);\n\n	gl_FragColor.rg = (1.0 - visibilityFactor > 0.001) ? vec2(d, 0.0) : vec2(0.0, d);\n\n}\n";


  var outline_default2 = "uniform vec2 texelSize;\n\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\n\nvoid main() {\n\n	vec2 uv = position.xy * 0.5 + 0.5;\n\n	vUv0 = vec2(uv.x + texelSize.x, uv.y);\n	vUv1 = vec2(uv.x - texelSize.x, uv.y);\n	vUv2 = vec2(uv.x, uv.y + texelSize.y);\n	vUv3 = vec2(uv.x, uv.y - texelSize.y);\n\n	gl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";


  var OutlineMaterial = class extends import_three19.ShaderMaterial {
    /**
     * Constructs a new outline material.
     *
     * TODO Remove texelSize param.
     * @param {Vector2} [texelSize] - The screen texel size.
     */
    constructor(texelSize = new import_three19.Vector2()) {
      super({
        name: "OutlineMaterial",
        uniforms: {
          inputBuffer: new import_three19.Uniform(null),
          texelSize: new import_three19.Uniform(new import_three19.Vector2())
        },
        blending: import_three19.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: outline_default,
        vertexShader: outline_default2
      });
      this.uniforms.texelSize.value.set(texelSize.x, texelSize.y);
      this.uniforms.maskTexture = this.uniforms.inputBuffer;
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Texture} value - The input buffer.
     */
    setInputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the texel size.
     *
     * @deprecated Use setSize() instead.
     * @param {Number} x - The texel width.
     * @param {Number} y - The texel height.
     */
    setTexelSize(x, y) {
      this.uniforms.texelSize.value.set(x, y);
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.uniforms.texelSize.value.set(1 / width, 1 / height);
    }
  };


  var import_three20 = __require("three");








  var SMAAWeightsMaterial = class extends import_three20.ShaderMaterial {
    /**
     * Constructs a new SMAA weights material.
     *
     * @param {Vector2} [texelSize] - The absolute screen texel size.
     * @param {Vector2} [resolution] - The resolution.
     */
    constructor(texelSize = new import_three20.Vector2(), resolution = new import_three20.Vector2()) {
      super({
        name: "SMAAWeightsMaterial",
        defines: {

          MAX_SEARCH_STEPS_INT: "16",
          MAX_SEARCH_STEPS_FLOAT: "16.0",
          MAX_SEARCH_STEPS_DIAG_INT: "8",
          MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0",
          CORNER_ROUNDING: "25",
          CORNER_ROUNDING_NORM: "0.25",

          AREATEX_MAX_DISTANCE: "16.0",
          AREATEX_MAX_DISTANCE_DIAG: "20.0",
          AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))",
          AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)",
          SEARCHTEX_SIZE: "vec2(66.0, 33.0)",
          SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)"
        },
        uniforms: {
          inputBuffer: new import_three20.Uniform(null),
          searchTexture: new import_three20.Uniform(null),
          areaTexture: new import_three20.Uniform(null),
          resolution: new import_three20.Uniform(resolution),
          texelSize: new import_three20.Uniform(texelSize)
        },
        blending: import_three20.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: smaa_weights_default,
        vertexShader: smaa_weights_default2
      });
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Texture} value - The input buffer.
     */
    setInputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * The search lookup texture.
     *
     * @type {Texture}
     */
    get searchTexture() {
      return this.uniforms.searchTexture.value;
    }
    set searchTexture(value) {
      this.uniforms.searchTexture.value = value;
    }
    /**
     * The area lookup texture.
     *
     * @type {Texture}
     */
    get areaTexture() {
      return this.uniforms.areaTexture.value;
    }
    set areaTexture(value) {
      this.uniforms.areaTexture.value = value;
    }
    /**
     * Sets the search and area lookup textures.
     *
     * @deprecated Use searchTexture and areaTexture instead.
     * @param {Texture} search - The search lookup texture.
     * @param {Texture} area - The area lookup texture.
     */
    setLookupTextures(search, area2) {
      this.searchTexture = search;
      this.areaTexture = area2;
    }
    /**
     * The maximum amount of steps performed in the horizontal/vertical pattern searches, at each side of the pixel.
     * Range: [0, 112].
     *
     * In number of pixels, it's actually the double. So the maximum line length perfectly handled by, for example 16, is
     * 64 (perfectly means that longer lines won't look as good, but are still antialiased).
     *
     * @type {Number}
     */
    get orthogonalSearchSteps() {
      return Number(this.defines.MAX_SEARCH_STEPS_INT);
    }
    set orthogonalSearchSteps(value) {
      const s = Math.min(Math.max(value, 0), 112);
      this.defines.MAX_SEARCH_STEPS_INT = s.toFixed("0");
      this.defines.MAX_SEARCH_STEPS_FLOAT = s.toFixed("1");
      this.needsUpdate = true;
    }
    /**
     * Sets the maximum amount of steps performed in the horizontal/vertical pattern searches, at each side of the pixel.
     *
     * @deprecated Use orthogonalSearchSteps instead.
     * @param {Number} value - The search steps. Range: [0, 112].
     */
    setOrthogonalSearchSteps(value) {
      this.orthogonalSearchSteps = value;
    }
    /**
     * The maximum steps performed in the diagonal pattern searches, at each side of the pixel. This search
     * jumps one pixel at a time. Range: [0, 20].
     *
     * On high-end machines this search is cheap (between 0.8x and 0.9x slower for 16 steps), but it can have a
     * significant impact on older machines.
     *
     * @type {Number}
     */
    get diagonalSearchSteps() {
      return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT);
    }
    set diagonalSearchSteps(value) {
      const s = Math.min(Math.max(value, 0), 20);
      this.defines.MAX_SEARCH_STEPS_DIAG_INT = s.toFixed("0");
      this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT = s.toFixed("1");
      this.needsUpdate = true;
    }
    /**
     * Specifies the maximum steps performed in the diagonal pattern searches, at each side of the pixel.
     *
     * @deprecated Use diagonalSearchSteps instead.
     * @param {Number} value - The search steps. Range: [0, 20].
     */
    setDiagonalSearchSteps(value) {
      this.diagonalSearchSteps = value;
    }
    /**
     * Indicates whether diagonal pattern detection is enabled.
     *
     * @type {Boolean}
     */
    get diagonalDetection() {
      return this.defines.DISABLE_DIAG_DETECTION === void 0;
    }
    set diagonalDetection(value) {
      if (value) {
        delete this.defines.DISABLE_DIAG_DETECTION;
      } else {
        this.defines.DISABLE_DIAG_DETECTION = "1";
      }
      this.needsUpdate = true;
    }
    /**
     * Indicates whether diagonal pattern detection is enabled.
     *
     * @deprecated Use diagonalDetection instead.
     * @return {Boolean} Whether diagonal pattern detection is enabled.
     */
    isDiagonalDetectionEnabled() {
      return this.diagonalDetection;
    }
    /**
     * Enables or disables diagonal pattern detection.
     *
     * @deprecated Use diagonalDetection instead.
     * @param {Boolean} value - Whether diagonal pattern detection should be enabled.
     */
    setDiagonalDetectionEnabled(value) {
      this.diagonalDetection = value;
    }
    /**
     * Specifies how much sharp corners will be rounded. Range: [0, 100].
     *
     * @type {Number}
     */
    get cornerRounding() {
      return Number(this.defines.CORNER_ROUNDING);
    }
    set cornerRounding(value) {
      const r = Math.min(Math.max(value, 0), 100);
      this.defines.CORNER_ROUNDING = r.toFixed("4");
      this.defines.CORNER_ROUNDING_NORM = (r / 100).toFixed("4");
      this.needsUpdate = true;
    }
    /**
     * Specifies how much sharp corners will be rounded.
     *
     * @deprecated Use cornerRounding instead.
     * @param {Number} value - The corner rounding amount. Range: [0, 100].
     */
    setCornerRounding(value) {
      this.cornerRounding = value;
    }
    /**
     * Indicates whether corner detection is enabled.
     *
     * @type {Number}
     */
    get cornerDetection() {
      return this.defines.DISABLE_CORNER_DETECTION === void 0;
    }
    set cornerDetection(value) {
      if (value) {
        delete this.defines.DISABLE_CORNER_DETECTION;
      } else {
        this.defines.DISABLE_CORNER_DETECTION = "1";
      }
      this.needsUpdate = true;
    }
    /**
     * Indicates whether corner rounding is enabled.
     *
     * @deprecated Use cornerDetection instead.
     * @return {Boolean} Whether corner rounding is enabled.
     */
    isCornerRoundingEnabled() {
      return this.cornerDetection;
    }
    /**
     * Enables or disables corner rounding.
     *
     * @deprecated Use cornerDetection instead.
     * @param {Boolean} value - Whether corner rounding should be enabled.
     */
    setCornerRoundingEnabled(value) {
      this.cornerDetection = value;
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const uniforms = this.uniforms;
      uniforms.texelSize.value.set(1 / width, 1 / height);
      uniforms.resolution.value.set(width, height);
    }
  };


  var import_three21 = __require("three");





  var ssao_default2 = "uniform vec2 noiseScale;\n\nvarying vec2 vUv;\nvarying vec2 vUv2;\n\nvoid main() {\n\n	vUv = position.xy * 0.5 + 0.5;\n	vUv2 = vUv * noiseScale;\n\n	gl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";


  var SSAOMaterial = class extends import_three21.ShaderMaterial {
    /**
     * Constructs a new SSAO material.
     *
     * @param {Camera} camera - A camera.
     */
    constructor(camera) {
      super({
        name: "SSAOMaterial",
        defines: {
          SAMPLES_INT: "0",
          INV_SAMPLES_FLOAT: "0.0",
          SPIRAL_TURNS: "0.0",
          RADIUS: "1.0",
          RADIUS_SQ: "1.0",
          DISTANCE_SCALING: "1",
          DEPTH_PACKING: "0"
        },
        uniforms: {
          depthBuffer: new import_three21.Uniform(null),
          normalBuffer: new import_three21.Uniform(null),
          normalDepthBuffer: new import_three21.Uniform(null),
          noiseTexture: new import_three21.Uniform(null),
          inverseProjectionMatrix: new import_three21.Uniform(new import_three21.Matrix4()),
          projectionMatrix: new import_three21.Uniform(new import_three21.Matrix4()),
          texelSize: new import_three21.Uniform(new import_three21.Vector2()),
          cameraNearFar: new import_three21.Uniform(new import_three21.Vector2()),
          distanceCutoff: new import_three21.Uniform(new import_three21.Vector2()),
          proximityCutoff: new import_three21.Uniform(new import_three21.Vector2()),
          noiseScale: new import_three21.Uniform(new import_three21.Vector2()),
          minRadiusScale: new import_three21.Uniform(0.33),
          intensity: new import_three21.Uniform(1),
          fade: new import_three21.Uniform(0.01),
          bias: new import_three21.Uniform(0)
        },
        blending: import_three21.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: ssao_default,
        vertexShader: ssao_default2
      });
      this.copyCameraSettings(camera);
      this.resolution = new import_three21.Vector2();
      this.r = 1;
    }
    /**
     * The current near plane setting.
     *
     * @type {Number}
     * @private
     */
    get near() {
      return this.uniforms.cameraNearFar.value.x;
    }
    /**
     * The current far plane setting.
     *
     * @type {Number}
     * @private
     */
    get far() {
      return this.uniforms.cameraNearFar.value.y;
    }
    /**
     * A combined normal-depth buffer.
     *
     * @type {Texture}
     */
    set normalDepthBuffer(value) {
      this.uniforms.normalDepthBuffer.value = value;
      if (value !== null) {
        this.defines.NORMAL_DEPTH = "1";
      } else {
        delete this.defines.NORMAL_DEPTH;
      }
      this.needsUpdate = true;
    }
    /**
     * Sets the combined normal-depth buffer.
     *
     * @deprecated Use normalDepthBuffer instead.
     * @param {Number} value - The buffer.
     */
    setNormalDepthBuffer(value) {
      this.normalDepthBuffer = value;
    }
    /**
     * The normal buffer.
     *
     * @type {Texture}
     */
    set normalBuffer(value) {
      this.uniforms.normalBuffer.value = value;
    }
    /**
     * Sets the normal buffer.
     *
     * @deprecated Use normalBuffer instead.
     * @param {Number} value - The buffer.
     */
    setNormalBuffer(value) {
      this.uniforms.normalBuffer.value = value;
    }
    /**
     * The depth buffer.
     *
     * @type {Texture}
     */
    set depthBuffer(value) {
      this.uniforms.depthBuffer.value = value;
    }
    /**
     * The depth packing strategy.
     *
     * @type {DepthPackingStrategies}
     */
    set depthPacking(value) {
      this.defines.DEPTH_PACKING = value.toFixed(0);
      this.needsUpdate = true;
    }
    /**
     * Sets the depth buffer.
     *
     * @deprecated Use depthBuffer and depthPacking instead.
     * @param {Texture} buffer - The depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthBuffer(buffer, depthPacking = import_three21.BasicDepthPacking) {
      this.depthBuffer = buffer;
      this.depthPacking = depthPacking;
    }
    /**
     * The noise texture.
     *
     * @type {Texture}
     */
    set noiseTexture(value) {
      this.uniforms.noiseTexture.value = value;
    }
    /**
     * Sets the noise texture.
     *
     * @deprecated Use noiseTexture instead.
     * @param {Number} value - The texture.
     */
    setNoiseTexture(value) {
      this.uniforms.noiseTexture.value = value;
    }
    /**
     * The sample count.
     *
     * @type {Number}
     */
    get samples() {
      return Number(this.defines.SAMPLES_INT);
    }
    set samples(value) {
      this.defines.SAMPLES_INT = value.toFixed(0);
      this.defines.INV_SAMPLES_FLOAT = (1 / value).toFixed(9);
      this.needsUpdate = true;
    }
    /**
     * Returns the amount of occlusion samples per pixel.
     *
     * @deprecated Use samples instead.
     * @return {Number} The sample count.
     */
    getSamples() {
      return this.samples;
    }
    /**
     * Sets the amount of occlusion samples per pixel.
     *
     * @deprecated Use samples instead.
     * @param {Number} value - The sample count.
     */
    setSamples(value) {
      this.samples = value;
    }
    /**
     * The sampling spiral ring count.
     *
     * @type {Number}
     */
    get rings() {
      return Number(this.defines.SPIRAL_TURNS);
    }
    set rings(value) {
      this.defines.SPIRAL_TURNS = value.toFixed(1);
      this.needsUpdate = true;
    }
    /**
     * Returns the amount of spiral turns in the occlusion sampling pattern.
     *
     * @deprecated Use rings instead.
     * @return {Number} The radius.
     */
    getRings() {
      return this.rings;
    }
    /**
     * Sets the amount of spiral turns in the occlusion sampling pattern.
     *
     * @deprecated Use rings instead.
     * @param {Number} value - The radius.
     */
    setRings(value) {
      this.rings = value;
    }
    /**
     * The intensity.
     *
     * @type {Number}
     * @deprecated Use SSAOEffect.intensity instead.
     */
    get intensity() {
      return this.uniforms.intensity.value;
    }
    set intensity(value) {
      this.uniforms.intensity.value = value;
      if (this.defines.LEGACY_INTENSITY === void 0) {
        this.defines.LEGACY_INTENSITY = "1";
        this.needsUpdate = true;
      }
    }
    /**
     * Returns the intensity.
     *
     * @deprecated Use SSAOEffect.intensity instead.
     * @return {Number} The intensity.
     */
    getIntensity() {
      return this.uniforms.intensity.value;
    }
    /**
     * Sets the intensity.
     *
     * @deprecated Use SSAOEffect.intensity instead.
     * @param {Number} value - The intensity.
     */
    setIntensity(value) {
      this.uniforms.intensity.value = value;
    }
    /**
     * The depth fade factor.
     *
     * @type {Number}
     */
    get fade() {
      return this.uniforms.fade.value;
    }
    set fade(value) {
      this.uniforms.fade.value = value;
    }
    /**
     * Returns the depth fade factor.
     *
     * @deprecated Use fade instead.
     * @return {Number} The fade factor.
     */
    getFade() {
      return this.uniforms.fade.value;
    }
    /**
     * Sets the depth fade factor.
     *
     * @deprecated Use fade instead.
     * @param {Number} value - The fade factor.
     */
    setFade(value) {
      this.uniforms.fade.value = value;
    }
    /**
     * The depth bias. Range: [0.0, 1.0].
     *
     * @type {Number}
     */
    get bias() {
      return this.uniforms.bias.value;
    }
    set bias(value) {
      this.uniforms.bias.value = value;
    }
    /**
     * Returns the depth bias.
     *
     * @deprecated Use bias instead.
     * @return {Number} The bias.
     */
    getBias() {
      return this.uniforms.bias.value;
    }
    /**
     * Sets the depth bias.
     *
     * @deprecated Use bias instead.
     * @param {Number} value - The bias.
     */
    setBias(value) {
      this.uniforms.bias.value = value;
    }
    /**
     * The minimum radius scale for distance scaling. Range: [0.0, 1.0].
     *
     * @type {Number}
     */
    get minRadiusScale() {
      return this.uniforms.minRadiusScale.value;
    }
    set minRadiusScale(value) {
      this.uniforms.minRadiusScale.value = value;
    }
    /**
     * Returns the minimum radius scale for distance scaling.
     *
     * @deprecated Use minRadiusScale instead.
     * @return {Number} The minimum radius scale.
     */
    getMinRadiusScale() {
      return this.uniforms.minRadiusScale.value;
    }
    /**
     * Sets the minimum radius scale for distance scaling.
     *
     * @deprecated Use minRadiusScale instead.
     * @param {Number} value - The minimum radius scale.
     */
    setMinRadiusScale(value) {
      this.uniforms.minRadiusScale.value = value;
    }
    /**
     * Updates the absolute radius.
     *
     * @private
     */
    updateRadius() {
      const radius = this.r * this.resolution.height;
      this.defines.RADIUS = radius.toFixed(11);
      this.defines.RADIUS_SQ = (radius * radius).toFixed(11);
      this.needsUpdate = true;
    }
    /**
     * The occlusion sampling radius. Range: [0.0, 1.0].
     *
     * @type {Number}
     */
    get radius() {
      return this.r;
    }
    set radius(value) {
      this.r = Math.min(Math.max(value, 1e-6), 1);
      this.updateRadius();
    }
    /**
     * Returns the occlusion sampling radius.
     *
     * @deprecated Use radius instead.
     * @return {Number} The radius.
     */
    getRadius() {
      return this.radius;
    }
    /**
     * Sets the occlusion sampling radius.
     *
     * @deprecated Use radius instead.
     * @param {Number} value - The radius. Range [1e-6, 1.0].
     */
    setRadius(value) {
      this.radius = value;
    }
    /**
     * Indicates whether distance-based radius scaling is enabled.
     *
     * @type {Boolean}
     * @deprecated
     */
    get distanceScaling() {
      return true;
    }
    set distanceScaling(value) {
    }
    /**
     * Indicates whether distance-based radius scaling is enabled.
     *
     * @deprecated
     * @return {Boolean} Whether distance scaling is enabled.
     */
    isDistanceScalingEnabled() {
      return this.distanceScaling;
    }
    /**
     * Enables or disables distance-based radius scaling.
     *
     * @deprecated
     * @param {Boolean} value - Whether distance scaling should be enabled.
     */
    setDistanceScalingEnabled(value) {
      this.distanceScaling = value;
    }
    /**
     * The occlusion distance threshold. Range: [0.0, 1.0].
     *
     * @type {Number}
     */
    get distanceThreshold() {
      return this.uniforms.distanceCutoff.value.x;
    }
    set distanceThreshold(value) {
      this.uniforms.distanceCutoff.value.set(
        Math.min(Math.max(value, 0), 1),
        Math.min(Math.max(value + this.distanceFalloff, 0), 1)
      );
    }
    /**
     * The occlusion distance threshold in world units.
     *
     * @type {Number}
     */
    get worldDistanceThreshold() {
      return -orthographicDepthToViewZ(this.distanceThreshold, this.near, this.far);
    }
    set worldDistanceThreshold(value) {
      this.distanceThreshold = viewZToOrthographicDepth(-value, this.near, this.far);
    }
    /**
     * The occlusion distance falloff. Range: [0.0, 1.0].
     *
     * @type {Number}
     */
    get distanceFalloff() {
      return this.uniforms.distanceCutoff.value.y - this.distanceThreshold;
    }
    set distanceFalloff(value) {
      this.uniforms.distanceCutoff.value.y = Math.min(Math.max(this.distanceThreshold + value, 0), 1);
    }
    /**
     * The occlusion distance falloff in world units.
     *
     * @type {Number}
     */
    get worldDistanceFalloff() {
      return -orthographicDepthToViewZ(this.distanceFalloff, this.near, this.far);
    }
    set worldDistanceFalloff(value) {
      this.distanceFalloff = viewZToOrthographicDepth(-value, this.near, this.far);
    }
    /**
     * Sets the occlusion distance cutoff.
     *
     * @deprecated Use distanceThreshold and distanceFalloff instead.
     * @param {Number} threshold - The distance threshold. Range [0.0, 1.0].
     * @param {Number} falloff - The falloff. Range [0.0, 1.0].
     */
    setDistanceCutoff(threshold, falloff) {
      this.uniforms.distanceCutoff.value.set(
        Math.min(Math.max(threshold, 0), 1),
        Math.min(Math.max(threshold + falloff, 0), 1)
      );
    }
    /**
     * The occlusion proximity threshold. Range: [0.0, 1.0].
     *
     * @type {Number}
     */
    get proximityThreshold() {
      return this.uniforms.proximityCutoff.value.x;
    }
    set proximityThreshold(value) {
      this.uniforms.proximityCutoff.value.set(
        Math.min(Math.max(value, 0), 1),
        Math.min(Math.max(value + this.proximityFalloff, 0), 1)
      );
    }
    /**
     * The occlusion proximity threshold in world units.
     *
     * @type {Number}
     */
    get worldProximityThreshold() {
      return -orthographicDepthToViewZ(this.proximityThreshold, this.near, this.far);
    }
    set worldProximityThreshold(value) {
      this.proximityThreshold = viewZToOrthographicDepth(-value, this.near, this.far);
    }
    /**
     * The occlusion proximity falloff. Range: [0.0, 1.0].
     *
     * @type {Number}
     */
    get proximityFalloff() {
      return this.uniforms.proximityCutoff.value.y - this.proximityThreshold;
    }
    set proximityFalloff(value) {
      this.uniforms.proximityCutoff.value.y = Math.min(Math.max(this.proximityThreshold + value, 0), 1);
    }
    /**
     * The occlusion proximity falloff in world units.
     *
     * @type {Number}
     */
    get worldProximityFalloff() {
      return -orthographicDepthToViewZ(this.proximityFalloff, this.near, this.far);
    }
    set worldProximityFalloff(value) {
      this.proximityFalloff = viewZToOrthographicDepth(-value, this.near, this.far);
    }
    /**
     * Sets the occlusion proximity cutoff.
     *
     * @deprecated Use proximityThreshold and proximityFalloff instead.
     * @param {Number} threshold - The range threshold. Range [0.0, 1.0].
     * @param {Number} falloff - The falloff. Range [0.0, 1.0].
     */
    setProximityCutoff(threshold, falloff) {
      this.uniforms.proximityCutoff.value.set(
        Math.min(Math.max(threshold, 0), 1),
        Math.min(Math.max(threshold + falloff, 0), 1)
      );
    }
    /**
     * Sets the texel size.
     *
     * @deprecated Use setSize() instead.
     * @param {Number} x - The texel width.
     * @param {Number} y - The texel height.
     */
    setTexelSize(x, y) {
      this.uniforms.texelSize.value.set(x, y);
    }
    /**
     * Copies the settings of the given camera.
     *
     * @deprecated Use copyCameraSettings instead.
     * @param {Camera} camera - A camera.
     */
    adoptCameraSettings(camera) {
      this.copyCameraSettings(camera);
    }
    /**
     * Copies the settings of the given camera.
     *
     * @param {Camera} camera - A camera.
     */
    copyCameraSettings(camera) {
      if (camera) {
        this.uniforms.cameraNearFar.value.set(camera.near, camera.far);
        this.uniforms.projectionMatrix.value.copy(camera.projectionMatrix);
        this.uniforms.inverseProjectionMatrix.value.copy(camera.projectionMatrix).invert();
        if (camera instanceof import_three21.PerspectiveCamera) {
          this.defines.PERSPECTIVE_CAMERA = "1";
        } else {
          delete this.defines.PERSPECTIVE_CAMERA;
        }
        this.needsUpdate = true;
      }
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const uniforms = this.uniforms;
      const noiseTexture = uniforms.noiseTexture.value;
      if (noiseTexture !== null) {
        uniforms.noiseScale.value.set(
          width / noiseTexture.image.width,
          height / noiseTexture.image.height
        );
      }
      uniforms.texelSize.value.set(1 / width, 1 / height);
      this.resolution.set(width, height);
      this.updateRadius();
    }
  };


  var import_three22 = __require("three");








  var TiltShiftBlurMaterial = class extends KawaseBlurMaterial {
    /**
     * Constructs a new tilt shift blur material.
     *
     * @param {Object} [options] - The options.
     * @param {Number} [options.offset=0.0] - The relative offset of the focus area.
     * @param {Number} [options.rotation=0.0] - The rotation of the focus area in radians.
     * @param {Number} [options.focusArea=0.4] - The relative size of the focus area.
     * @param {Number} [options.feather=0.3] - The softness of the focus area edges.
     */
    constructor({
      kernelSize = KernelSize.MEDIUM,
      offset = 0,
      rotation = 0,
      focusArea = 0.4,
      feather = 0.3
    } = {}) {
      super();
      this.fragmentShader = convolution_tilt_shift_default;
      this.vertexShader = convolution_tilt_shift_default2;
      this.kernelSize = kernelSize;
      this.fragmentShader = updateFragmentShader(this.fragmentShader);
      this.uniforms.aspect = new import_three22.Uniform(1);
      this.uniforms.rotation = new import_three22.Uniform(new import_three22.Vector2());
      this.uniforms.maskParams = new import_three22.Uniform(new import_three22.Vector4());
      this._offset = offset;
      this._focusArea = focusArea;
      this._feather = feather;
      this.rotation = rotation;
      this.updateParams();
    }
    /**
     * The relative offset of the focus area.
     *
     * @private
     */
    updateParams() {
      const params = this.uniforms.maskParams.value;
      const a = Math.max(this.focusArea, 0);
      const b = Math.max(a - this.feather, 0);
      params.set(
        this.offset - a,
        this.offset - b,
        this.offset + a,
        this.offset + b
      );
    }
    /**
     * The rotation of the focus area in radians.
     *
     * @type {Number}
     */
    get rotation() {
      return Math.acos(this.uniforms.rotation.value.x);
    }
    set rotation(value) {
      this.uniforms.rotation.value.set(Math.cos(value), Math.sin(value));
    }
    /**
     * The relative offset of the focus area.
     *
     * @type {Number}
     */
    get offset() {
      return this._offset;
    }
    set offset(value) {
      this._offset = value;
      this.updateParams();
    }
    /**
     * The relative size of the focus area.
     *
     * @type {Number}
     */
    get focusArea() {
      return this._focusArea;
    }
    set focusArea(value) {
      this._focusArea = value;
      this.updateParams();
    }
    /**
     * The softness of the focus area edges.
     *
     * @type {Number}
     */
    get feather() {
      return this._feather;
    }
    set feather(value) {
      this._feather = value;
      this.updateParams();
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      super.setSize(width, height);
      this.uniforms.aspect.value = width / height;
    }
  };


  var import_three23 = __require("three");


  var convolution_upsampling_default = "#ifdef FRAMEBUFFER_PRECISION_HIGH\n\n	uniform mediump sampler2D inputBuffer;\n	uniform mediump sampler2D supportBuffer;\n\n#else\n\n	uniform lowp sampler2D inputBuffer;\n	uniform lowp sampler2D supportBuffer;\n\n#endif\n\nuniform float radius;\n\nvarying vec2 vUv;\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\nvarying vec2 vUv4;\nvarying vec2 vUv5;\nvarying vec2 vUv6;\nvarying vec2 vUv7;\n\nvoid main() {\n\n	vec4 c = vec4(0.0);\n\n	c += texture2D(inputBuffer, vUv0) * 0.0625;\n	c += texture2D(inputBuffer, vUv1) * 0.125;\n	c += texture2D(inputBuffer, vUv2) * 0.0625;\n	c += texture2D(inputBuffer, vUv3) * 0.125;\n	c += texture2D(inputBuffer, vUv) * 0.25;\n	c += texture2D(inputBuffer, vUv4) * 0.125;\n	c += texture2D(inputBuffer, vUv5) * 0.0625;\n	c += texture2D(inputBuffer, vUv6) * 0.125;\n	c += texture2D(inputBuffer, vUv7) * 0.0625;\n\n	vec4 baseColor = texture2D(supportBuffer, vUv);\n	gl_FragColor = mix(baseColor, c, radius);\n\n	#include <colorspace_fragment>\n\n}\n";


  var convolution_upsampling_default2 = "uniform vec2 texelSize;\n\nvarying vec2 vUv;\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\nvarying vec2 vUv4;\nvarying vec2 vUv5;\nvarying vec2 vUv6;\nvarying vec2 vUv7;\n\nvoid main() {\n\n	vUv = position.xy * 0.5 + 0.5;\n\n	vUv0 = vUv + texelSize * vec2(-1.0, 1.0);\n	vUv1 = vUv + texelSize * vec2(0.0, 1.0);\n	vUv2 = vUv + texelSize * vec2(1.0, 1.0);\n	vUv3 = vUv + texelSize * vec2(-1.0, 0.0);\n\n	vUv4 = vUv + texelSize * vec2(1.0, 0.0);\n	vUv5 = vUv + texelSize * vec2(-1.0, -1.0);\n	vUv6 = vUv + texelSize * vec2(0.0, -1.0);\n	vUv7 = vUv + texelSize * vec2(1.0, -1.0);\n\n	gl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";


  var UpsamplingMaterial = class extends import_three23.ShaderMaterial {
    /**
     * Constructs a new upsampling material.
     */
    constructor() {
      super({
        name: "UpsamplingMaterial",
        uniforms: {
          inputBuffer: new import_three23.Uniform(null),
          supportBuffer: new import_three23.Uniform(null),
          texelSize: new import_three23.Uniform(new import_three23.Vector2()),
          radius: new import_three23.Uniform(0.85)
        },
        blending: import_three23.NoBlending,
        toneMapped: false,
        depthWrite: false,
        depthTest: false,
        fragmentShader: convolution_upsampling_default,
        vertexShader: convolution_upsampling_default2
      });
      this.fragmentShader = updateFragmentShader(this.fragmentShader);
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
      this.uniforms.inputBuffer.value = value;
    }
    /**
     * A support buffer.
     *
     * @type {Texture}
     */
    set supportBuffer(value) {
      this.uniforms.supportBuffer.value = value;
    }
    /**
     * The blur radius.
     *
     * @type {Number}
     */
    get radius() {
      return this.uniforms.radius.value;
    }
    set radius(value) {
      this.uniforms.radius.value = value;
    }
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.uniforms.texelSize.value.set(1 / width, 1 / height);
    }
  };


  var import_three25 = __require("three");


  var import_three24 = __require("three");
  var dummyCamera = /* @__PURE__ */ new import_three24.Camera();
  var geometry = null;
  function getFullscreenTriangle() {
    if (geometry === null) {
      const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
      const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);
      geometry = new import_three24.BufferGeometry();
      if (geometry.setAttribute !== void 0) {
        geometry.setAttribute("position", new import_three24.BufferAttribute(vertices, 3));
        geometry.setAttribute("uv", new import_three24.BufferAttribute(uvs, 2));
      } else {
        geometry.addAttribute("position", new import_three24.BufferAttribute(vertices, 3));
        geometry.addAttribute("uv", new import_three24.BufferAttribute(uvs, 2));
      }
    }
    return geometry;
  }
  var Pass = class _Pass {
    /**
     * Constructs a new pass.
     *
     * @param {String} [name] - The name of this pass. Does not have to be unique.
     * @param {Scene} [scene] - The scene to render. The default scene contains a single mesh that fills the screen.
     * @param {Camera} [camera] - A camera. Fullscreen effect passes don't require a camera.
     */
    constructor(name = "Pass", scene = new import_three24.Scene(), camera = dummyCamera) {
      this.name = name;
      this.renderer = null;
      this.scene = scene;
      this.camera = camera;
      this.screen = null;
      this.rtt = true;
      this.needsSwap = true;
      this.needsDepthTexture = false;
      this.enabled = true;
    }
    /**
     * Sets the render to screen flag.
     *
     * If this flag is changed, the fullscreen material will be updated as well.
     *
     * @type {Boolean}
     */
    get renderToScreen() {
      return !this.rtt;
    }
    set renderToScreen(value) {
      if (this.rtt === value) {
        const material = this.fullscreenMaterial;
        if (material !== null) {
          material.needsUpdate = true;
        }
        this.rtt = !value;
      }
    }
    /**
     * Sets the main scene.
     *
     * @type {Scene}
     */
    set mainScene(value) {
    }
    /**
     * Sets the main camera.
     *
     * @type {Camera}
     */
    set mainCamera(value) {
    }
    /**
     * Sets the renderer
     *
     * @deprecated
     * @param {WebGLRenderer} renderer - The renderer.
     */
    setRenderer(renderer) {
      this.renderer = renderer;
    }
    /**
     * Indicates whether this pass is enabled.
     *
     * @deprecated Use enabled instead.
     * @return {Boolean} Whether this pass is enabled.
     */
    isEnabled() {
      return this.enabled;
    }
    /**
     * Enables or disables this pass.
     *
     * @deprecated Use enabled instead.
     * @param {Boolean} value - Whether the pass should be enabled.
     */
    setEnabled(value) {
      this.enabled = value;
    }
    /**
     * The fullscreen material.
     *
     * @type {Material}
     */
    get fullscreenMaterial() {
      return this.screen !== null ? this.screen.material : null;
    }
    set fullscreenMaterial(value) {
      let screen = this.screen;
      if (screen !== null) {
        screen.material = value;
      } else {
        screen = new import_three24.Mesh(getFullscreenTriangle(), value);
        screen.frustumCulled = false;
        if (this.scene === null) {
          this.scene = new import_three24.Scene();
        }
        this.scene.add(screen);
        this.screen = screen;
      }
    }
    /**
     * Returns the current fullscreen material.
     *
     * @deprecated Use fullscreenMaterial instead.
     * @return {Material} The current fullscreen material, or null if there is none.
     */
    getFullscreenMaterial() {
      return this.fullscreenMaterial;
    }
    /**
     * Sets the fullscreen material.
     *
     * @deprecated Use fullscreenMaterial instead.
     * @protected
     * @param {Material} value - A fullscreen material.
     */
    setFullscreenMaterial(value) {
      this.fullscreenMaterial = value;
    }
    /**
     * Returns the current depth texture.
     *
     * @return {Texture} The current depth texture, or null if there is none.
     */
    getDepthTexture() {
      return null;
    }
    /**
     * Sets the depth texture.
     *
     * This method will be called automatically by the {@link EffectComposer}.
     * You may override this method if your pass relies on the depth information of a preceding {@link RenderPass}.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategy} [depthPacking=BasicDepthPacking] - The depth packing.
     */
    setDepthTexture(depthTexture, depthPacking = import_three24.BasicDepthPacking) {
    }
    /**
     * Renders this pass.
     *
     * This is an abstract method that must be overridden.
     *
     * @abstract
     * @throws {Error} An error is thrown if the method is not overridden.
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      throw new Error("Render method not implemented!");
    }
    /**
     * Sets the size.
     *
     * You may override this method if you want to be informed about the size of the backbuffer/canvas.
     * This method is called before {@link initialize} and every time the size of the {@link EffectComposer} changes.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
    }
    /**
     * Performs initialization tasks.
     *
     * This method is called when this pass is added to an {@link EffectComposer}.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
    }
    /**
     * Performs a shallow search for disposable properties and deletes them.
     *
     * The {@link EffectComposer} calls this method when it is being destroyed. You can use it independently to free
     * memory when you're certain that you don't need this pass anymore.
     */
    dispose() {
      for (const key of Object.keys(this)) {
        const property = this[key];
        const isDisposable = property instanceof import_three24.WebGLRenderTarget || property instanceof import_three24.Material || property instanceof import_three24.Texture || property instanceof _Pass;
        if (isDisposable) {
          this[key].dispose();
        }
      }
    }
  };


  var CopyPass = class extends Pass {
    /**
     * Constructs a new save pass.
     *
     * @param {WebGLRenderTarget} [renderTarget] - A render target.
     * @param {Boolean} [autoResize=true] - Whether the render target size should be updated automatically.
     */
    constructor(renderTarget, autoResize = true) {
      super("CopyPass");
      this.fullscreenMaterial = new CopyMaterial();
      this.needsSwap = false;
      this.renderTarget = renderTarget;
      if (renderTarget === void 0) {
        this.renderTarget = new import_three25.WebGLRenderTarget(1, 1, {
          minFilter: import_three25.LinearFilter,
          magFilter: import_three25.LinearFilter,
          stencilBuffer: false,
          depthBuffer: false
        });
        this.renderTarget.texture.name = "CopyPass.Target";
      }
      this.autoResize = autoResize;
    }
    /**
     * Enables or disables auto resizing of the render target.
     *
     * @deprecated Use autoResize instead.
     * @type {Boolean}
     */
    get resize() {
      return this.autoResize;
    }
    set resize(value) {
      this.autoResize = value;
    }
    /**
     * The output texture.
     *
     * @type {Texture}
     */
    get texture() {
      return this.renderTarget.texture;
    }
    /**
     * Returns the output texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.renderTarget.texture;
    }
    /**
     * Enables or disables auto resizing of the render target.
     *
     * @deprecated Use autoResize instead.
     * @param {Boolean} value - Whether the render target size should be updated automatically.
     */
    setAutoResizeEnabled(value) {
      this.autoResize = value;
    }
    /**
     * Saves the input buffer.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      this.fullscreenMaterial.inputBuffer = inputBuffer.texture;
      renderer.setRenderTarget(this.renderToScreen ? null : this.renderTarget);
      renderer.render(this.scene, this.camera);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      if (this.autoResize) {
        this.renderTarget.setSize(width, height);
      }
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - A renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      if (frameBufferType !== void 0) {
        this.renderTarget.texture.type = frameBufferType;
        if (frameBufferType !== import_three25.UnsignedByteType) {
          this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
        } else if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.renderTarget.texture, SRGBColorSpace);
        }
      }
    }
  };


  var AdaptiveLuminancePass = class extends Pass {
    /**
     * Constructs a new adaptive luminance pass.
     *
     * @param {Texture} luminanceBuffer - A buffer that contains the current scene luminance.
     * @param {Object} [options] - The options.
     * @param {Number} [options.minLuminance=0.01] - The minimum luminance.
     * @param {Number} [options.adaptationRate=1.0] - The luminance adaptation rate.
     */
    constructor(luminanceBuffer, { minLuminance = 0.01, adaptationRate = 1 } = {}) {
      super("AdaptiveLuminancePass");
      this.fullscreenMaterial = new AdaptiveLuminanceMaterial();
      this.needsSwap = false;
      this.renderTargetPrevious = new import_three26.WebGLRenderTarget(1, 1, {
        minFilter: import_three26.NearestFilter,
        magFilter: import_three26.NearestFilter,
        depthBuffer: false
      });
      this.renderTargetPrevious.texture.name = "Luminance.Previous";
      const material = this.fullscreenMaterial;
      material.luminanceBuffer0 = this.renderTargetPrevious.texture;
      material.luminanceBuffer1 = luminanceBuffer;
      material.minLuminance = minLuminance;
      material.adaptationRate = adaptationRate;
      this.renderTargetAdapted = this.renderTargetPrevious.clone();
      this.renderTargetAdapted.texture.name = "Luminance.Adapted";
      this.copyPass = new CopyPass(this.renderTargetPrevious, false);
    }
    /**
     * The adaptive luminance texture.
     *
     * @type {Texture}
     */
    get texture() {
      return this.renderTargetAdapted.texture;
    }
    /**
     * Returns the adaptive 1x1 luminance texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.renderTargetAdapted.texture;
    }
    /**
     * Sets the 1x1 mipmap level.
     *
     * This level is used to identify the smallest mipmap of the main luminance texture which contains the downsampled
     * average scene luminance.
     *
     * @type {Number}
     * @deprecated Use fullscreenMaterial.mipLevel1x1 instead.
     */
    set mipLevel1x1(value) {
      this.fullscreenMaterial.mipLevel1x1 = value;
    }
    /**
     * The luminance adaptation rate.
     *
     * @type {Number}
     * @deprecated Use fullscreenMaterial.adaptationRate instead.
     */
    get adaptationRate() {
      return this.fullscreenMaterial.adaptationRate;
    }
    /**
     * @type {Number}
     * @deprecated Use fullscreenMaterial.adaptationRate instead.
     */
    set adaptationRate(value) {
      this.fullscreenMaterial.adaptationRate = value;
    }
    /**
     * Renders the scene normals.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      this.fullscreenMaterial.deltaTime = deltaTime;
      renderer.setRenderTarget(this.renderToScreen ? null : this.renderTargetAdapted);
      renderer.render(this.scene, this.camera);
      this.copyPass.render(renderer, this.renderTargetAdapted);
    }
  };


  var import_three27 = __require("three");
  var BoxBlurPass = class extends Pass {
    /**
     * Constructs a new box blur pass.
     *
     * @param {Object} [options] - The options.
     * @param {Number} [options.kernelSize=5] - Must be an odd number. The sizes 3 and 5 use optimized code paths.
     * @param {Number} [options.iterations=1] - The amount of times the blur should be applied.
     * @param {Number} [options.bilateral=false] - Enables or disables bilateral blurring.
     * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     */
    constructor({
      kernelSize = 5,
      iterations = 1,
      bilateral = false,
      resolutionScale = 1,
      resolutionX = Resolution.AUTO_SIZE,
      resolutionY = Resolution.AUTO_SIZE
    } = {}) {
      super("BoxBlurPass");
      this.needsDepthTexture = bilateral;
      this.renderTargetA = new import_three27.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTargetA.texture.name = "Blur.Target.A";
      this.renderTargetB = new import_three27.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTargetB.texture.name = "Blur.Target.B";
      this.blurMaterial = new BoxBlurMaterial({ bilateral, kernelSize });
      this.copyMaterial = new CopyMaterial();
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
      this.iterations = iterations;
    }
    set mainCamera(value) {
      this.blurMaterial.copyCameraSettings(value);
    }
    /**
     * Sets the depth texture.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthTexture(depthTexture, depthPacking = import_three27.BasicDepthPacking) {
      this.blurMaterial.depthBuffer = depthTexture;
      this.blurMaterial.depthPacking = depthPacking;
    }
    /**
     * Renders the blur.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const scene = this.scene;
      const camera = this.camera;
      const renderTargetA = this.renderTargetA;
      const renderTargetB = this.renderTargetB;
      const blurMaterial = this.blurMaterial;
      this.fullscreenMaterial = blurMaterial;
      let previousBuffer = inputBuffer;
      for (let i = 0, l = Math.max(this.iterations, 1); i < l; ++i) {
        const buffer = (i & 1) === 0 ? renderTargetA : renderTargetB;
        blurMaterial.inputBuffer = previousBuffer.texture;
        renderer.setRenderTarget(buffer);
        renderer.render(scene, camera);
        previousBuffer = buffer;
      }
      this.copyMaterial.inputBuffer = previousBuffer.texture;
      this.fullscreenMaterial = this.copyMaterial;
      renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
      renderer.render(scene, camera);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      const w = resolution.width, h = resolution.height;
      this.renderTargetA.setSize(w, h);
      this.renderTargetB.setSize(w, h);
      this.blurMaterial.setSize(width, height);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      this.blurMaterial.maxVaryingVectors = renderer.capabilities.maxVaryings;
      if (frameBufferType !== void 0) {
        this.renderTargetA.texture.type = frameBufferType;
        this.renderTargetB.texture.type = frameBufferType;
        if (frameBufferType !== import_three27.UnsignedByteType) {
          this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
        } else if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.renderTargetA.texture, SRGBColorSpace);
          setTextureColorSpace(this.renderTargetB.texture, SRGBColorSpace);
        }
      }
    }
  };


  var ClearMaskPass = class extends Pass {
    /**
     * Constructs a new clear mask pass.
     */
    constructor() {
      super("ClearMaskPass", null, null);
      this.needsSwap = false;
    }
    /**
     * Disables the global stencil test.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const stencil = renderer.state.buffers.stencil;
      stencil.setLocked(false);
      stencil.setTest(false);
    }
  };


  var import_three28 = __require("three");
  var color = /* @__PURE__ */ new import_three28.Color();
  var ClearPass = class extends Pass {
    /**
     * Constructs a new clear pass.
     *
     * @param {Boolean} [color=true] - Determines whether the color buffer should be cleared.
     * @param {Boolean} [depth=true] - Determines whether the depth buffer should be cleared.
     * @param {Boolean} [stencil=false] - Determines whether the stencil buffer should be cleared.
     */
    constructor(color2 = true, depth = true, stencil = false) {
      super("ClearPass", null, null);
      this.needsSwap = false;
      this.color = color2;
      this.depth = depth;
      this.stencil = stencil;
      this.overrideClearColor = null;
      this.overrideClearAlpha = -1;
    }
    /**
     * Sets the clear flags.
     *
     * @param {Boolean} color - Whether the color buffer should be cleared.
     * @param {Boolean} depth - Whether the depth buffer should be cleared.
     * @param {Boolean} stencil - Whether the stencil buffer should be cleared.
     */
    setClearFlags(color2, depth, stencil) {
      this.color = color2;
      this.depth = depth;
      this.stencil = stencil;
    }
    /**
     * Returns the override clear color. Default is null.
     *
     * @deprecated Use overrideClearColor instead.
     * @return {Color} The clear color.
     */
    getOverrideClearColor() {
      return this.overrideClearColor;
    }
    /**
     * Sets the override clear color.
     *
     * @deprecated Use overrideClearColor instead.
     * @param {Color} value - The clear color.
     */
    setOverrideClearColor(value) {
      this.overrideClearColor = value;
    }
    /**
     * Returns the override clear alpha. Default is -1.
     *
     * @deprecated Use overrideClearAlpha instead.
     * @return {Number} The clear alpha.
     */
    getOverrideClearAlpha() {
      return this.overrideClearAlpha;
    }
    /**
     * Sets the override clear alpha.
     *
     * @deprecated Use overrideClearAlpha instead.
     * @param {Number} value - The clear alpha.
     */
    setOverrideClearAlpha(value) {
      this.overrideClearAlpha = value;
    }
    /**
     * Clears the input buffer or the screen.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const overrideClearColor = this.overrideClearColor;
      const overrideClearAlpha = this.overrideClearAlpha;
      const clearAlpha = renderer.getClearAlpha();
      const hasOverrideClearColor = overrideClearColor !== null;
      const hasOverrideClearAlpha = overrideClearAlpha >= 0;
      if (hasOverrideClearColor) {
        renderer.getClearColor(color);
        renderer.setClearColor(overrideClearColor, hasOverrideClearAlpha ? overrideClearAlpha : clearAlpha);
      } else if (hasOverrideClearAlpha) {
        renderer.setClearAlpha(overrideClearAlpha);
      }
      renderer.setRenderTarget(this.renderToScreen ? null : inputBuffer);
      renderer.clear(this.color, this.depth, this.stencil);
      if (hasOverrideClearColor) {
        renderer.setClearColor(color, clearAlpha);
      } else if (hasOverrideClearAlpha) {
        renderer.setClearAlpha(clearAlpha);
      }
    }
  };


  var import_three29 = __require("three");


  var RenderPass = class extends Pass {
    /**
     * Constructs a new render pass.
     *
     * @param {Scene} scene - The scene to render.
     * @param {Camera} camera - The camera to use to render the scene.
     * @param {Material} [overrideMaterial=null] - An override material.
     */
    constructor(scene, camera, overrideMaterial = null) {
      super("RenderPass", scene, camera);
      this.needsSwap = false;
      this.clearPass = new ClearPass();
      this.overrideMaterialManager = overrideMaterial === null ? null : new OverrideMaterialManager(overrideMaterial);
      this.ignoreBackground = false;
      this.skipShadowMapUpdate = false;
      this.selection = null;
    }
    set mainScene(value) {
      this.scene = value;
    }
    set mainCamera(value) {
      this.camera = value;
    }
    get renderToScreen() {
      return super.renderToScreen;
    }
    set renderToScreen(value) {
      super.renderToScreen = value;
      this.clearPass.renderToScreen = value;
    }
    /**
     * The current override material.
     *
     * @type {Material}
     */
    get overrideMaterial() {
      const manager = this.overrideMaterialManager;
      return manager !== null ? manager.material : null;
    }
    set overrideMaterial(value) {
      const manager = this.overrideMaterialManager;
      if (value !== null) {
        if (manager !== null) {
          manager.setMaterial(value);
        } else {
          this.overrideMaterialManager = new OverrideMaterialManager(value);
        }
      } else if (manager !== null) {
        manager.dispose();
        this.overrideMaterialManager = null;
      }
    }
    /**
     * Returns the current override material.
     *
     * @deprecated Use overrideMaterial instead.
     * @return {Material} The material.
     */
    getOverrideMaterial() {
      return this.overrideMaterial;
    }
    /**
     * Sets the override material.
     *
     * @deprecated Use overrideMaterial instead.
     * @return {Material} value - The material.
     */
    setOverrideMaterial(value) {
      this.overrideMaterial = value;
    }
    /**
     * Indicates whether the target buffer should be cleared before rendering.
     *
     * @type {Boolean}
     * @deprecated Use clearPass.enabled instead.
     */
    get clear() {
      return this.clearPass.enabled;
    }
    set clear(value) {
      this.clearPass.enabled = value;
    }
    /**
     * Returns the selection. Default is `null` (no restriction).
     *
     * @deprecated Use selection instead.
     * @return {Selection} The selection.
     */
    getSelection() {
      return this.selection;
    }
    /**
     * Sets the selection. Set to `null` to disable.
     *
     * @deprecated Use selection instead.
     * @param {Selection} value - The selection.
     */
    setSelection(value) {
      this.selection = value;
    }
    /**
     * Indicates whether the scene background is disabled.
     *
     * @deprecated Use ignoreBackground instead.
     * @return {Boolean} Whether the scene background is disabled.
     */
    isBackgroundDisabled() {
      return this.ignoreBackground;
    }
    /**
     * Enables or disables the scene background.
     *
     * @deprecated Use ignoreBackground instead.
     * @param {Boolean} value - Whether the scene background should be disabled.
     */
    setBackgroundDisabled(value) {
      this.ignoreBackground = value;
    }
    /**
     * Indicates whether the shadow map auto update is disabled.
     *
     * @deprecated Use skipShadowMapUpdate instead.
     * @return {Boolean} Whether the shadow map update is disabled.
     */
    isShadowMapDisabled() {
      return this.skipShadowMapUpdate;
    }
    /**
     * Enables or disables the shadow map auto update.
     *
     * @deprecated Use skipShadowMapUpdate instead.
     * @param {Boolean} value - Whether the shadow map auto update should be disabled.
     */
    setShadowMapDisabled(value) {
      this.skipShadowMapUpdate = value;
    }
    /**
     * Returns the clear pass.
     *
     * @deprecated Use clearPass.enabled instead.
     * @return {ClearPass} The clear pass.
     */
    getClearPass() {
      return this.clearPass;
    }
    /**
     * Renders the scene.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const scene = this.scene;
      const camera = this.camera;
      const selection = this.selection;
      const mask = camera.layers.mask;
      const background = scene.background;
      const shadowMapAutoUpdate = renderer.shadowMap.autoUpdate;
      const renderTarget = this.renderToScreen ? null : inputBuffer;
      if (selection !== null) {
        camera.layers.set(selection.getLayer());
      }
      if (this.skipShadowMapUpdate) {
        renderer.shadowMap.autoUpdate = false;
      }
      if (this.ignoreBackground || this.clearPass.overrideClearColor !== null) {
        scene.background = null;
      }
      if (this.clearPass.enabled) {
        this.clearPass.render(renderer, inputBuffer);
      }
      renderer.setRenderTarget(renderTarget);
      if (this.overrideMaterialManager !== null) {
        this.overrideMaterialManager.render(renderer, scene, camera);
      } else {
        renderer.render(scene, camera);
      }
      camera.layers.mask = mask;
      scene.background = background;
      renderer.shadowMap.autoUpdate = shadowMapAutoUpdate;
    }
  };


  var DepthPass = class extends Pass {
    /**
     * Constructs a new depth pass.
     *
     * @param {Scene} scene - The scene to render.
     * @param {Camera} camera - The camera to use to render the scene.
     * @param {Object} [options] - The options.
     * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
     * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     */
    constructor(scene, camera, {
      renderTarget,
      resolutionScale = 1,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("DepthPass");
      this.needsSwap = false;
      this.renderPass = new RenderPass(scene, camera, new import_three29.MeshDepthMaterial({
        depthPacking: import_three29.RGBADepthPacking
      }));
      const renderPass = this.renderPass;
      renderPass.skipShadowMapUpdate = true;
      renderPass.ignoreBackground = true;
      const clearPass = renderPass.clearPass;
      clearPass.overrideClearColor = new import_three29.Color(16777215);
      clearPass.overrideClearAlpha = 1;
      this.renderTarget = renderTarget;
      if (this.renderTarget === void 0) {
        this.renderTarget = new import_three29.WebGLRenderTarget(1, 1, {
          minFilter: import_three29.NearestFilter,
          magFilter: import_three29.NearestFilter
        });
        this.renderTarget.texture.name = "DepthPass.Target";
      }
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    }
    set mainScene(value) {
      this.renderPass.mainScene = value;
    }
    set mainCamera(value) {
      this.renderPass.mainCamera = value;
    }
    /**
     * The depth texture.
     *
     * @type {Texture}
     */
    get texture() {
      return this.renderTarget.texture;
    }
    /**
     * Returns the depth texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.renderTarget.texture;
    }
    /**
     * Returns the resolution settings.
     *
     * @deprecated Use resolution instead.
     * @return {Resolution} The resolution.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * Returns the current resolution scale.
     *
     * @return {Number} The resolution scale.
     * @deprecated Use resolution instead.
     */
    getResolutionScale() {
      return this.resolution.scale;
    }
    /**
     * Sets the resolution scale.
     *
     * @param {Number} scale - The new resolution scale.
     * @deprecated Use resolution instead.
     */
    setResolutionScale(scale) {
      this.resolution.scale = scale;
    }
    /**
     * Renders the scene depth.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const renderTarget = this.renderToScreen ? null : this.renderTarget;
      this.renderPass.render(renderer, renderTarget);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      this.renderTarget.setSize(resolution.width, resolution.height);
    }
  };


  var import_three30 = __require("three");
  var DepthDownsamplingPass = class extends Pass {
    /**
     * Constructs a new depth downsampling pass.
     *
     * @param {Object} [options] - The options.
     * @param {Texture} [options.normalBuffer=null] - A texture that contains view space normals. See {@link NormalPass}.
     * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     */
    constructor({
      normalBuffer = null,
      resolutionScale = 0.5,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("DepthDownsamplingPass");
      const material = new DepthDownsamplingMaterial();
      material.normalBuffer = normalBuffer;
      this.fullscreenMaterial = material;
      this.needsDepthTexture = true;
      this.needsSwap = false;
      this.renderTarget = new import_three30.WebGLRenderTarget(1, 1, {
        minFilter: import_three30.NearestFilter,
        magFilter: import_three30.NearestFilter,
        depthBuffer: false,
        type: import_three30.FloatType
      });
      this.renderTarget.texture.name = "DepthDownsamplingPass.Target";
      this.renderTarget.texture.generateMipmaps = false;
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    }
    /**
     * The normal(RGB) + depth(A) texture.
     *
     * @type {Texture}
     */
    get texture() {
      return this.renderTarget.texture;
    }
    /**
     * Returns the normal(RGB) + depth(A) texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.renderTarget.texture;
    }
    /**
     * Returns the resolution settings.
     *
     * @deprecated Use resolution instead.
     * @return {Resolution} The resolution.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * Sets the depth texture.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
     */
    setDepthTexture(depthTexture, depthPacking = import_three30.BasicDepthPacking) {
      this.fullscreenMaterial.depthBuffer = depthTexture;
      this.fullscreenMaterial.depthPacking = depthPacking;
    }
    /**
     * Downsamples depth and scene normals.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      renderer.setRenderTarget(this.renderToScreen ? null : this.renderTarget);
      renderer.render(this.scene, this.camera);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      this.renderTarget.setSize(resolution.width, resolution.height);
      this.fullscreenMaterial.setSize(width, height);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      const gl = renderer.getContext();
      const renderable = gl.getExtension("EXT_color_buffer_float") || gl.getExtension("EXT_color_buffer_half_float");
      if (!renderable) {
        throw new Error("Rendering to float texture is not supported.");
      }
    }
  };


  var import_three32 = __require("three");


  var import_three31 = __require("three");
  var DepthCopyPass = class extends Pass {
    /**
     * Constructs a new depth save pass.
     *
     * @param {Object} [options] - The options.
     * @param {DepthPackingStrategies} [options.depthPacking=RGBADepthPacking] - The output depth packing.
     */
    constructor({ depthPacking = import_three31.RGBADepthPacking } = {}) {
      super("DepthCopyPass");
      const material = new DepthCopyMaterial();
      material.outputDepthPacking = depthPacking;
      this.fullscreenMaterial = material;
      this.needsDepthTexture = true;
      this.needsSwap = false;
      this.renderTarget = new import_three31.WebGLRenderTarget(1, 1, {
        type: depthPacking === import_three31.RGBADepthPacking ? import_three31.UnsignedByteType : import_three31.FloatType,
        minFilter: import_three31.NearestFilter,
        magFilter: import_three31.NearestFilter,
        depthBuffer: false
      });
      this.renderTarget.texture.name = "DepthCopyPass.Target";
    }
    /**
     * The output depth texture.
     *
     * @type {Texture}
     */
    get texture() {
      return this.renderTarget.texture;
    }
    /**
     * Returns the output depth texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.renderTarget.texture;
    }
    /**
     * The output depth packing.
     *
     * @type {DepthPackingStrategies}
     */
    get depthPacking() {
      return this.fullscreenMaterial.outputDepthPacking;
    }
    /**
     * Returns the output depth packing.
     *
     * @deprecated Use depthPacking instead.
     * @return {DepthPackingStrategies} The depth packing.
     */
    getDepthPacking() {
      return this.fullscreenMaterial.outputDepthPacking;
    }
    /**
     * Sets the depth texture.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
     */
    setDepthTexture(depthTexture, depthPacking = import_three31.BasicDepthPacking) {
      this.fullscreenMaterial.depthBuffer = depthTexture;
      this.fullscreenMaterial.inputDepthPacking = depthPacking;
    }
    /**
     * Copies depth from a depth texture.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      renderer.setRenderTarget(this.renderToScreen ? null : this.renderTarget);
      renderer.render(this.scene, this.camera);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.renderTarget.setSize(width, height);
    }
  };


  var unpackFactors = new Float32Array([
    255 / 256 / 256 ** 3,
    255 / 256 / 256 ** 2,
    255 / 256 / 256,
    255 / 256
  ]);
  function unpackRGBAToDepth(packedDepth) {
    return (packedDepth[0] * unpackFactors[0] + packedDepth[1] * unpackFactors[1] + packedDepth[2] * unpackFactors[2] + packedDepth[3] * unpackFactors[3]) / 255;
  }
  var DepthPickingPass = class extends DepthCopyPass {
    /**
     * Constructs a new depth picking pass.
     *
     * @param {Object} [options] - The options.
     * @param {DepthPackingStrategies} [options.depthPacking=RGBADepthPacking] - The depth packing.
     * @param {Number} [options.mode=DepthCopyMode.SINGLE] - The depth copy mode.
     */
    constructor({ depthPacking = import_three32.RGBADepthPacking, mode = DepthCopyMode.SINGLE } = {}) {
      super({ depthPacking });
      this.name = "DepthPickingPass";
      this.fullscreenMaterial.mode = mode;
      this.pixelBuffer = depthPacking === import_three32.RGBADepthPacking ? new Uint8Array(4) : new Float32Array(4);
      this.callback = null;
    }
    /**
     * Reads depth at a specific screen position.
     *
     * Only one depth value can be picked per frame. Calling this method multiple times per frame will overwrite the
     * picking coordinates. Unresolved promises will be abandoned.
     *
     * @example
     * const ndc = new Vector3();
     * const clientRect = myViewport.getBoundingClientRect();
     * const clientX = pointerEvent.clientX - clientRect.left;
     * const clientY = pointerEvent.clientY - clientRect.top;
     * ndc.x = (clientX / myViewport.clientWidth) * 2.0 - 1.0;
     * ndc.y = -(clientY / myViewport.clientHeight) * 2.0 + 1.0;
     * const depth = await depthPickingPass.readDepth(ndc);
     * ndc.z = depth * 2.0 - 1.0;
     *
     * const worldPosition = ndc.unproject(camera);
     *
     * @param {Vector2|Vector3} ndc - Normalized device coordinates. Only X and Y are relevant.
     * @return {Promise<Number>} A promise that returns the depth on the next frame.
     */
    readDepth(ndc) {
      this.fullscreenMaterial.texelPosition.set(ndc.x * 0.5 + 0.5, ndc.y * 0.5 + 0.5);
      return new Promise((resolve) => {
        this.callback = resolve;
      });
    }
    /**
     * Copies depth and resolves depth picking promises.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const material = this.fullscreenMaterial;
      const mode = material.mode;
      if (mode === DepthCopyMode.FULL) {
        super.render(renderer);
      }
      if (this.callback !== null) {
        const renderTarget = this.renderTarget;
        const pixelBuffer = this.pixelBuffer;
        const packed = renderTarget.texture.type !== import_three32.FloatType;
        let x = 0, y = 0;
        if (mode === DepthCopyMode.SINGLE) {
          super.render(renderer);
        } else {
          const texelPosition = material.texelPosition;
          x = Math.round(texelPosition.x * renderTarget.width);
          y = Math.round(texelPosition.y * renderTarget.height);
        }
        renderer.readRenderTargetPixels(renderTarget, x, y, 1, 1, pixelBuffer);
        this.callback(packed ? unpackRGBAToDepth(pixelBuffer) : pixelBuffer[0]);
        this.callback = null;
      }
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      if (this.fullscreenMaterial.mode === DepthCopyMode.FULL) {
        super.setSize(width, height);
      }
    }
  };


  var import_three33 = __require("three");
  function prefixSubstrings(prefix, substrings, strings) {
    for (const substring of substrings) {
      const prefixed = "$1" + prefix + substring.charAt(0).toUpperCase() + substring.slice(1);
      const regExp = new RegExp("([^\\.])(\\b" + substring + "\\b)", "g");
      for (const entry of strings.entries()) {
        if (entry[1] !== null) {
          strings.set(entry[0], entry[1].replace(regExp, prefixed));
        }
      }
    }
  }
  function integrateEffect(prefix, effect, data) {
    let fragmentShader = effect.getFragmentShader();
    let vertexShader = effect.getVertexShader();
    const mainImageExists = fragmentShader !== void 0 && /mainImage/.test(fragmentShader);
    const mainUvExists = fragmentShader !== void 0 && /mainUv/.test(fragmentShader);
    data.attributes |= effect.getAttributes();
    if (fragmentShader === void 0) {
      throw new Error(`Missing fragment shader (${effect.name})`);
    } else if (mainUvExists && (data.attributes & EffectAttribute.CONVOLUTION) !== 0) {
      throw new Error(`Effects that transform UVs are incompatible with convolution effects (${effect.name})`);
    } else if (!mainImageExists && !mainUvExists) {
      throw new Error(`Could not find mainImage or mainUv function (${effect.name})`);
    } else {
      const functionRegExp = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g;
      const shaderParts = data.shaderParts;
      let fragmentHead = shaderParts.get(EffectShaderSection.FRAGMENT_HEAD) || "";
      let fragmentMainUv = shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_UV) || "";
      let fragmentMainImage = shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_IMAGE) || "";
      let vertexHead = shaderParts.get(EffectShaderSection.VERTEX_HEAD) || "";
      let vertexMainSupport = shaderParts.get(EffectShaderSection.VERTEX_MAIN_SUPPORT) || "";
      const varyings = /* @__PURE__ */ new Set();
      const names = /* @__PURE__ */ new Set();
      if (mainUvExists) {
        fragmentMainUv += `	${prefix}MainUv(UV);
`;
        data.uvTransformation = true;
      }
      if (vertexShader !== null && /mainSupport/.test(vertexShader)) {
        const needsUv = /mainSupport *\([\w\s]*?uv\s*?\)/.test(vertexShader);
        vertexMainSupport += `	${prefix}MainSupport(`;
        vertexMainSupport += needsUv ? "vUv);\n" : ");\n";
        for (const m2 of vertexShader.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) {
          for (const n of m2[1].split(/\s*,\s*/)) {
            data.varyings.add(n);
            varyings.add(n);
            names.add(n);
          }
        }
        for (const m2 of vertexShader.matchAll(functionRegExp)) {
          names.add(m2[1]);
        }
      }
      for (const m2 of fragmentShader.matchAll(functionRegExp)) {
        names.add(m2[1]);
      }
      for (const d of effect.defines.keys()) {
        names.add(d.replace(/\([\w\s,]*\)/g, ""));
      }
      for (const u of effect.uniforms.keys()) {
        names.add(u);
      }
      names.delete("while");
      names.delete("for");
      names.delete("if");
      effect.uniforms.forEach((val, key) => data.uniforms.set(prefix + key.charAt(0).toUpperCase() + key.slice(1), val));
      effect.defines.forEach((val, key) => data.defines.set(prefix + key.charAt(0).toUpperCase() + key.slice(1), val));
      const shaders = /* @__PURE__ */ new Map([["fragment", fragmentShader], ["vertex", vertexShader]]);
      prefixSubstrings(prefix, names, data.defines);
      prefixSubstrings(prefix, names, shaders);
      fragmentShader = shaders.get("fragment");
      vertexShader = shaders.get("vertex");
      const blendMode = effect.blendMode;
      data.blendModes.set(blendMode.blendFunction, blendMode);
      if (mainImageExists) {
        if (effect.inputColorSpace !== null && effect.inputColorSpace !== data.colorSpace) {
          fragmentMainImage += effect.inputColorSpace === SRGBColorSpace ? "color0 = LinearTosRGB(color0);\n	" : "color0 = sRGBToLinear(color0);\n	";
        }
        if (effect.outputColorSpace !== NoColorSpace) {
          data.colorSpace = effect.outputColorSpace;
        } else if (effect.inputColorSpace !== null) {
          data.colorSpace = effect.inputColorSpace;
        }
        const depthParamRegExp = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
        fragmentMainImage += `${prefix}MainImage(color0, UV, `;
        if ((data.attributes & EffectAttribute.DEPTH) !== 0 && depthParamRegExp.test(fragmentShader)) {
          fragmentMainImage += "depth, ";
          data.readDepth = true;
        }
        fragmentMainImage += "color1);\n	";
        const blendOpacity = prefix + "BlendOpacity";
        data.uniforms.set(blendOpacity, blendMode.opacity);
        fragmentMainImage += `color0 = blend${blendMode.blendFunction}(color0, color1, ${blendOpacity});

	`;
        fragmentHead += `uniform float ${blendOpacity};

`;
      }
      fragmentHead += fragmentShader + "\n";
      if (vertexShader !== null) {
        vertexHead += vertexShader + "\n";
      }
      shaderParts.set(EffectShaderSection.FRAGMENT_HEAD, fragmentHead);
      shaderParts.set(EffectShaderSection.FRAGMENT_MAIN_UV, fragmentMainUv);
      shaderParts.set(EffectShaderSection.FRAGMENT_MAIN_IMAGE, fragmentMainImage);
      shaderParts.set(EffectShaderSection.VERTEX_HEAD, vertexHead);
      shaderParts.set(EffectShaderSection.VERTEX_MAIN_SUPPORT, vertexMainSupport);
      if (effect.extensions !== null) {
        for (const extension of effect.extensions) {
          data.extensions.add(extension);
        }
      }
    }
  }
  var EffectPass = class extends Pass {
    /**
     * Constructs a new effect pass.
     *
     * @param {Camera} camera - The main camera.
     * @param {...Effect} effects - The effects that will be rendered by this pass.
     */
    constructor(camera, ...effects) {
      super("EffectPass");
      this.fullscreenMaterial = new EffectMaterial(null, null, null, camera);
      this.listener = (event) => this.handleEvent(event);
      this.effects = [];
      this.setEffects(effects);
      this.skipRendering = false;
      this.minTime = 1;
      this.maxTime = Number.POSITIVE_INFINITY;
      this.timeScale = 1;
    }
    set mainScene(value) {
      for (const effect of this.effects) {
        effect.mainScene = value;
      }
    }
    set mainCamera(value) {
      this.fullscreenMaterial.copyCameraSettings(value);
      for (const effect of this.effects) {
        effect.mainCamera = value;
      }
    }
    /**
     * Indicates whether this pass encodes its output when rendering to screen.
     *
     * @type {Boolean}
     * @deprecated Use fullscreenMaterial.encodeOutput instead.
     */
    get encodeOutput() {
      return this.fullscreenMaterial.encodeOutput;
    }
    set encodeOutput(value) {
      this.fullscreenMaterial.encodeOutput = value;
    }
    /**
     * Indicates whether dithering is enabled.
     *
     * @type {Boolean}
     */
    get dithering() {
      return this.fullscreenMaterial.dithering;
    }
    set dithering(value) {
      const material = this.fullscreenMaterial;
      material.dithering = value;
      material.needsUpdate = true;
    }
    /**
     * Sets the effects.
     *
     * @param {Effect[]} effects - The effects.
     * @protected
     */
    setEffects(effects) {
      for (const effect of this.effects) {
        effect.removeEventListener("change", this.listener);
      }
      this.effects = effects.sort((a, b) => b.attributes - a.attributes);
      for (const effect of this.effects) {
        effect.addEventListener("change", this.listener);
      }
    }
    /**
     * Updates the compound shader material.
     *
     * @protected
     */
    updateMaterial() {
      const data = new EffectShaderData();
      let id = 0;
      for (const effect of this.effects) {
        if (effect.blendMode.blendFunction === BlendFunction.DST) {
          data.attributes |= effect.getAttributes() & EffectAttribute.DEPTH;
        } else if ((data.attributes & effect.getAttributes() & EffectAttribute.CONVOLUTION) !== 0) {
          throw new Error(`Convolution effects cannot be merged (${effect.name})`);
        } else {
          integrateEffect("e" + id++, effect, data);
        }
      }
      let fragmentHead = data.shaderParts.get(EffectShaderSection.FRAGMENT_HEAD);
      let fragmentMainImage = data.shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_IMAGE);
      let fragmentMainUv = data.shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_UV);
      const blendRegExp = /\bblend\b/g;
      for (const blendMode of data.blendModes.values()) {
        fragmentHead += blendMode.getShaderCode().replace(blendRegExp, `blend${blendMode.blendFunction}`) + "\n";
      }
      if ((data.attributes & EffectAttribute.DEPTH) !== 0) {
        if (data.readDepth) {
          fragmentMainImage = "float depth = readDepth(UV);\n\n	" + fragmentMainImage;
        }
        this.needsDepthTexture = this.getDepthTexture() === null;
      } else {
        this.needsDepthTexture = false;
      }
      if (data.colorSpace === SRGBColorSpace) {
        fragmentMainImage += "color0 = sRGBToLinear(color0);\n	";
      }
      if (data.uvTransformation) {
        fragmentMainUv = "vec2 transformedUv = vUv;\n" + fragmentMainUv;
        data.defines.set("UV", "transformedUv");
      } else {
        data.defines.set("UV", "vUv");
      }
      data.shaderParts.set(EffectShaderSection.FRAGMENT_HEAD, fragmentHead);
      data.shaderParts.set(EffectShaderSection.FRAGMENT_MAIN_IMAGE, fragmentMainImage);
      data.shaderParts.set(EffectShaderSection.FRAGMENT_MAIN_UV, fragmentMainUv);
      for (const [key, value] of data.shaderParts) {
        if (value !== null) {
          data.shaderParts.set(key, value.trim().replace(/^#/, "\n#"));
        }
      }
      this.skipRendering = id === 0;
      this.needsSwap = !this.skipRendering;
      this.fullscreenMaterial.setShaderData(data);
    }
    /**
     * Rebuilds the shader material.
     */
    recompile() {
      this.updateMaterial();
    }
    /**
     * Returns the current depth texture.
     *
     * @return {Texture} The current depth texture, or null if there is none.
     */
    getDepthTexture() {
      return this.fullscreenMaterial.depthBuffer;
    }
    /**
     * Sets the depth texture.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
     */
    setDepthTexture(depthTexture, depthPacking = import_three33.BasicDepthPacking) {
      this.fullscreenMaterial.depthBuffer = depthTexture;
      this.fullscreenMaterial.depthPacking = depthPacking;
      for (const effect of this.effects) {
        effect.setDepthTexture(depthTexture, depthPacking);
      }
    }
    /**
     * Renders the effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      for (const effect of this.effects) {
        effect.update(renderer, inputBuffer, deltaTime);
      }
      if (!this.skipRendering || this.renderToScreen) {
        const material = this.fullscreenMaterial;
        material.inputBuffer = inputBuffer.texture;
        material.time += deltaTime * this.timeScale;
        renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
        renderer.render(this.scene, this.camera);
      }
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.fullscreenMaterial.setSize(width, height);
      for (const effect of this.effects) {
        effect.setSize(width, height);
      }
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      this.renderer = renderer;
      for (const effect of this.effects) {
        effect.initialize(renderer, alpha, frameBufferType);
      }
      this.updateMaterial();
      if (frameBufferType !== void 0 && frameBufferType !== import_three33.UnsignedByteType) {
        this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      }
    }
    /**
     * Deletes disposable objects.
     */
    dispose() {
      super.dispose();
      for (const effect of this.effects) {
        effect.removeEventListener("change", this.listener);
        effect.dispose();
      }
    }
    /**
     * Handles events.
     *
     * @param {Event} event - An event.
     */
    handleEvent(event) {
      switch (event.type) {
        case "change":
          this.recompile();
          break;
      }
    }
  };


  var import_three34 = __require("three");
  var GaussianBlurPass = class extends Pass {
    /**
     * Constructs a new Gaussian blur pass.
     *
     * @param {Object} [options] - The options.
     * @param {Number} [options.kernelSize=35] - The kernel size. Should be an odd number in the range [3, 1020].
     * @param {Number} [options.iterations=1] - The amount of times the blur should be applied.
     * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     */
    constructor({
      kernelSize = 35,
      iterations = 1,
      resolutionScale = 1,
      resolutionX = Resolution.AUTO_SIZE,
      resolutionY = Resolution.AUTO_SIZE
    } = {}) {
      super("GaussianBlurPass");
      this.renderTargetA = new import_three34.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTargetA.texture.name = "Blur.Target.A";
      this.renderTargetB = this.renderTargetA.clone();
      this.renderTargetB.texture.name = "Blur.Target.B";
      this.blurMaterial = new GaussianBlurMaterial({ kernelSize });
      this.copyMaterial = new CopyMaterial();
      this.copyMaterial.inputBuffer = this.renderTargetB.texture;
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
      this.iterations = iterations;
    }
    /**
     * Renders the blur.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const scene = this.scene;
      const camera = this.camera;
      const renderTargetA = this.renderTargetA;
      const renderTargetB = this.renderTargetB;
      const blurMaterial = this.blurMaterial;
      this.fullscreenMaterial = blurMaterial;
      let previousBuffer = inputBuffer;
      for (let i = 0, l = Math.max(this.iterations, 1); i < l; ++i) {
        blurMaterial.direction.set(1, 0);
        blurMaterial.inputBuffer = previousBuffer.texture;
        renderer.setRenderTarget(renderTargetA);
        renderer.render(scene, camera);
        blurMaterial.direction.set(0, 1);
        blurMaterial.inputBuffer = renderTargetA.texture;
        renderer.setRenderTarget(renderTargetB);
        renderer.render(scene, camera);
        if (i === 0 && l > 1) {
          previousBuffer = renderTargetB;
        }
      }
      this.fullscreenMaterial = this.copyMaterial;
      renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
      renderer.render(scene, camera);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      const w = resolution.width, h = resolution.height;
      this.renderTargetA.setSize(w, h);
      this.renderTargetB.setSize(w, h);
      this.blurMaterial.setSize(width, height);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      if (frameBufferType !== void 0) {
        this.renderTargetA.texture.type = frameBufferType;
        this.renderTargetB.texture.type = frameBufferType;
        if (frameBufferType !== import_three34.UnsignedByteType) {
          this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
          this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
        } else if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.renderTargetA.texture, SRGBColorSpace);
          setTextureColorSpace(this.renderTargetB.texture, SRGBColorSpace);
        }
      }
    }
  };


  var import_three35 = __require("three");
  var KawaseBlurPass = class extends Pass {
    /**
     * Constructs a new Kawase blur pass.
     *
     * @param {Object} [options] - The options.
     * @param {KernelSize} [options.kernelSize=KernelSize.MEDIUM] - The blur kernel size.
     * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     */
    constructor({
      kernelSize = KernelSize.MEDIUM,
      resolutionScale = 0.5,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("KawaseBlurPass");
      this.renderTargetA = new import_three35.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTargetA.texture.name = "Blur.Target.A";
      this.renderTargetB = this.renderTargetA.clone();
      this.renderTargetB.texture.name = "Blur.Target.B";
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
      this._blurMaterial = new KawaseBlurMaterial();
      this._blurMaterial.kernelSize = kernelSize;
      this.copyMaterial = new CopyMaterial();
    }
    /**
     * Returns the resolution settings.
     *
     * @deprecated Use resolution instead.
     * @return {Resolution} The resolution.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * The blur material.
     *
     * @type {KawaseBlurMaterial}
     */
    get blurMaterial() {
      return this._blurMaterial;
    }
    /**
     * The blur material.
     *
     * @type {KawaseBlurMaterial}
     * @protected
     */
    set blurMaterial(value) {
      this._blurMaterial = value;
    }
    /**
     * Indicates whether dithering is enabled.
     *
     * @type {Boolean}
     * @deprecated Use copyMaterial.dithering instead.
     */
    get dithering() {
      return this.copyMaterial.dithering;
    }
    set dithering(value) {
      this.copyMaterial.dithering = value;
    }
    /**
     * The kernel size.
     *
     * @type {KernelSize}
     * @deprecated Use blurMaterial.kernelSize instead.
     */
    get kernelSize() {
      return this.blurMaterial.kernelSize;
    }
    set kernelSize(value) {
      this.blurMaterial.kernelSize = value;
    }
    /**
     * The current width of the internal render targets.
     *
     * @type {Number}
     * @deprecated Use resolution.width instead.
     */
    get width() {
      return this.resolution.width;
    }
    /**
     * Sets the render width.
     *
     * @type {Number}
     * @deprecated Use resolution.preferredWidth instead.
     */
    set width(value) {
      this.resolution.preferredWidth = value;
    }
    /**
     * The current height of the internal render targets.
     *
     * @type {Number}
     * @deprecated Use resolution.height instead.
     */
    get height() {
      return this.resolution.height;
    }
    /**
     * Sets the render height.
     *
     * @type {Number}
     * @deprecated Use resolution.preferredHeight instead.
     */
    set height(value) {
      this.resolution.preferredHeight = value;
    }
    /**
     * The current blur scale.
     *
     * @type {Number}
     * @deprecated Use blurMaterial.scale instead.
     */
    get scale() {
      return this.blurMaterial.scale;
    }
    set scale(value) {
      this.blurMaterial.scale = value;
    }
    /**
     * Returns the current blur scale.
     *
     * @deprecated Use blurMaterial.scale instead.
     * @return {Number} The scale.
     */
    getScale() {
      return this.blurMaterial.scale;
    }
    /**
     * Sets the blur scale.
     *
     * @deprecated Use blurMaterial.scale instead.
     * @param {Number} value - The scale.
     */
    setScale(value) {
      this.blurMaterial.scale = value;
    }
    /**
     * Returns the kernel size.
     *
     * @deprecated Use blurMaterial.kernelSize instead.
     * @return {KernelSize} The kernel size.
     */
    getKernelSize() {
      return this.kernelSize;
    }
    /**
     * Sets the kernel size.
     *
     * Larger kernels require more processing power but scale well with larger render resolutions.
     *
     * @deprecated Use blurMaterial.kernelSize instead.
     * @param {KernelSize} value - The kernel size.
     */
    setKernelSize(value) {
      this.kernelSize = value;
    }
    /**
     * Returns the current resolution scale.
     *
     * @return {Number} The resolution scale.
     * @deprecated Use resolution instead.
     */
    getResolutionScale() {
      return this.resolution.scale;
    }
    /**
     * Sets the resolution scale.
     *
     * @param {Number} scale - The new resolution scale.
     * @deprecated Use resolution instead.
     */
    setResolutionScale(scale) {
      this.resolution.scale = scale;
    }
    /**
     * Renders the blur.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const scene = this.scene;
      const camera = this.camera;
      const renderTargetA = this.renderTargetA;
      const renderTargetB = this.renderTargetB;
      const material = this.blurMaterial;
      const kernelSequence = material.kernelSequence;
      let previousBuffer = inputBuffer;
      this.fullscreenMaterial = material;
      for (let i = 0, l = kernelSequence.length; i < l; ++i) {
        const buffer = (i & 1) === 0 ? renderTargetA : renderTargetB;
        material.kernel = kernelSequence[i];
        material.inputBuffer = previousBuffer.texture;
        renderer.setRenderTarget(buffer);
        renderer.render(scene, camera);
        previousBuffer = buffer;
      }
      this.fullscreenMaterial = this.copyMaterial;
      this.copyMaterial.inputBuffer = previousBuffer.texture;
      renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
      renderer.render(scene, camera);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      const w = resolution.width, h = resolution.height;
      this.renderTargetA.setSize(w, h);
      this.renderTargetB.setSize(w, h);
      this.blurMaterial.setSize(width, height);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      if (frameBufferType !== void 0) {
        this.renderTargetA.texture.type = frameBufferType;
        this.renderTargetB.texture.type = frameBufferType;
        if (frameBufferType !== import_three35.UnsignedByteType) {
          this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
          this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
        } else if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.renderTargetA.texture, SRGBColorSpace);
          setTextureColorSpace(this.renderTargetB.texture, SRGBColorSpace);
        }
      }
    }
    /**
     * An auto sizing flag.
     *
     * @type {Number}
     * @deprecated Use {@link Resolution.AUTO_SIZE} instead.
     */
    static get AUTO_SIZE() {
      return Resolution.AUTO_SIZE;
    }
  };


  var LambdaPass = class extends Pass {
    /**
     * Constructs a new lambda pass.
     *
     * @param {Function} f - A function.
     */
    constructor(f) {
      super("LambdaPass", null, null);
      this.needsSwap = false;
      this.f = f;
    }
    /**
     * Executes the function.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      this.f();
    }
  };


  var import_three36 = __require("three");
  var LuminancePass = class extends Pass {
    /**
     * Constructs a new luminance pass.
     *
     * @param {Object} [options] - The options. See {@link LuminanceMaterial} for additional options.
     * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
     * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     */
    constructor({
      renderTarget,
      luminanceRange,
      colorOutput,
      resolutionScale = 1,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("LuminancePass");
      this.fullscreenMaterial = new LuminanceMaterial(colorOutput, luminanceRange);
      this.needsSwap = false;
      this.renderTarget = renderTarget;
      if (this.renderTarget === void 0) {
        this.renderTarget = new import_three36.WebGLRenderTarget(1, 1, { depthBuffer: false });
        this.renderTarget.texture.name = "LuminancePass.Target";
      }
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    }
    /**
     * The luminance texture.
     *
     * @type {Texture}
     */
    get texture() {
      return this.renderTarget.texture;
    }
    /**
     * Returns the luminance texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.renderTarget.texture;
    }
    /**
     * Returns the resolution settings.
     *
     * @deprecated Use resolution instead.
     * @return {Resolution} The resolution.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * Renders the luminance.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const material = this.fullscreenMaterial;
      material.inputBuffer = inputBuffer.texture;
      renderer.setRenderTarget(this.renderToScreen ? null : this.renderTarget);
      renderer.render(this.scene, this.camera);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      this.renderTarget.setSize(resolution.width, resolution.height);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - A renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      if (frameBufferType !== void 0 && frameBufferType !== import_three36.UnsignedByteType) {
        this.renderTarget.texture.type = frameBufferType;
        this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      }
    }
  };


  var MaskPass = class extends Pass {
    /**
     * Constructs a new mask pass.
     *
     * @param {Scene} scene - The scene to render.
     * @param {Camera} camera - The camera to use.
     */
    constructor(scene, camera) {
      super("MaskPass", scene, camera);
      this.needsSwap = false;
      this.clearPass = new ClearPass(false, false, true);
      this.inverse = false;
    }
    set mainScene(value) {
      this.scene = value;
    }
    set mainCamera(value) {
      this.camera = value;
    }
    /**
     * Indicates whether the mask should be inverted.
     *
     * @type {Boolean}
     */
    get inverted() {
      return this.inverse;
    }
    set inverted(value) {
      this.inverse = value;
    }
    /**
     * Indicates whether this pass should clear the stencil buffer.
     *
     * @type {Boolean}
     * @deprecated Use clearPass.enabled instead.
     */
    get clear() {
      return this.clearPass.enabled;
    }
    set clear(value) {
      this.clearPass.enabled = value;
    }
    /**
     * Returns the internal clear pass.
     *
     * @deprecated Use clearPass.enabled instead.
     * @return {ClearPass} The clear pass.
     */
    getClearPass() {
      return this.clearPass;
    }
    /**
     * Indicates whether the mask is inverted.
     *
     * @deprecated Use inverted instead.
     * @return {Boolean} Whether the mask is inverted.
     */
    isInverted() {
      return this.inverted;
    }
    /**
     * Enables or disable mask inversion.
     *
     * @deprecated Use inverted instead.
     * @param {Boolean} value - Whether the mask should be inverted.
     */
    setInverted(value) {
      this.inverted = value;
    }
    /**
     * Renders the effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const context = renderer.getContext();
      const buffers = renderer.state.buffers;
      const scene = this.scene;
      const camera = this.camera;
      const clearPass = this.clearPass;
      const writeValue = this.inverted ? 0 : 1;
      const clearValue = 1 - writeValue;
      buffers.color.setMask(false);
      buffers.depth.setMask(false);
      buffers.color.setLocked(true);
      buffers.depth.setLocked(true);
      buffers.stencil.setTest(true);
      buffers.stencil.setOp(context.REPLACE, context.REPLACE, context.REPLACE);
      buffers.stencil.setFunc(context.ALWAYS, writeValue, 4294967295);
      buffers.stencil.setClear(clearValue);
      buffers.stencil.setLocked(true);
      if (this.clearPass.enabled) {
        if (this.renderToScreen) {
          clearPass.render(renderer, null);
        } else {
          clearPass.render(renderer, inputBuffer);
          clearPass.render(renderer, outputBuffer);
        }
      }
      if (this.renderToScreen) {
        renderer.setRenderTarget(null);
        renderer.render(scene, camera);
      } else {
        renderer.setRenderTarget(inputBuffer);
        renderer.render(scene, camera);
        renderer.setRenderTarget(outputBuffer);
        renderer.render(scene, camera);
      }
      buffers.color.setLocked(false);
      buffers.depth.setLocked(false);
      buffers.stencil.setLocked(false);
      buffers.stencil.setFunc(context.EQUAL, 1, 4294967295);
      buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP);
      buffers.stencil.setLocked(true);
    }
  };


  var import_three37 = __require("three");
  var MipmapBlurPass = class extends Pass {
    /**
     * Constructs a new mipmap blur pass.
     *
     * @param {Object} [options] - The options.
     */
    constructor() {
      super("MipmapBlurPass");
      this.needsSwap = false;
      this.renderTarget = new import_three37.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTarget.texture.name = "Upsampling.Mipmap0";
      this.downsamplingMipmaps = [];
      this.upsamplingMipmaps = [];
      this.downsamplingMaterial = new DownsamplingMaterial();
      this.upsamplingMaterial = new UpsamplingMaterial();
      this.resolution = new import_three37.Vector2();
    }
    /**
     * A texture that contains the blurred result.
     *
     * @type {Texture}
     */
    get texture() {
      return this.renderTarget.texture;
    }
    /**
     * The MIP levels. Default is 8.
     *
     * @type {Number}
     */
    get levels() {
      return this.downsamplingMipmaps.length;
    }
    set levels(value) {
      if (this.levels !== value) {
        const renderTarget = this.renderTarget;
        this.dispose();
        this.downsamplingMipmaps = [];
        this.upsamplingMipmaps = [];
        for (let i = 0; i < value; ++i) {
          const mipmap = renderTarget.clone();
          mipmap.texture.name = "Downsampling.Mipmap" + i;
          this.downsamplingMipmaps.push(mipmap);
        }
        this.upsamplingMipmaps.push(renderTarget);
        for (let i = 1, l = value - 1; i < l; ++i) {
          const mipmap = renderTarget.clone();
          mipmap.texture.name = "Upsampling.Mipmap" + i;
          this.upsamplingMipmaps.push(mipmap);
        }
        this.setSize(this.resolution.x, this.resolution.y);
      }
    }
    /**
     * The blur radius.
     *
     * @type {Number}
     */
    get radius() {
      return this.upsamplingMaterial.radius;
    }
    set radius(value) {
      this.upsamplingMaterial.radius = value;
    }
    /**
     * Renders the blur.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const { scene, camera } = this;
      const { downsamplingMaterial, upsamplingMaterial } = this;
      const { downsamplingMipmaps, upsamplingMipmaps } = this;
      let previousBuffer = inputBuffer;
      this.fullscreenMaterial = downsamplingMaterial;
      for (let i = 0, l = downsamplingMipmaps.length; i < l; ++i) {
        const mipmap = downsamplingMipmaps[i];
        downsamplingMaterial.setSize(previousBuffer.width, previousBuffer.height);
        downsamplingMaterial.inputBuffer = previousBuffer.texture;
        renderer.setRenderTarget(mipmap);
        renderer.render(scene, camera);
        previousBuffer = mipmap;
      }
      this.fullscreenMaterial = upsamplingMaterial;
      for (let i = upsamplingMipmaps.length - 1; i >= 0; --i) {
        const mipmap = upsamplingMipmaps[i];
        upsamplingMaterial.setSize(previousBuffer.width, previousBuffer.height);
        upsamplingMaterial.inputBuffer = previousBuffer.texture;
        upsamplingMaterial.supportBuffer = downsamplingMipmaps[i].texture;
        renderer.setRenderTarget(mipmap);
        renderer.render(scene, camera);
        previousBuffer = mipmap;
      }
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.set(width, height);
      let w = resolution.width, h = resolution.height;
      for (let i = 0, l = this.downsamplingMipmaps.length; i < l; ++i) {
        w = Math.round(w * 0.5);
        h = Math.round(h * 0.5);
        this.downsamplingMipmaps[i].setSize(w, h);
        if (i < this.upsamplingMipmaps.length) {
          this.upsamplingMipmaps[i].setSize(w, h);
        }
      }
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      if (frameBufferType !== void 0) {
        const mipmaps = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
        for (const mipmap of mipmaps) {
          mipmap.texture.type = frameBufferType;
        }
        if (frameBufferType !== import_three37.UnsignedByteType) {
          this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
          this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
        } else if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          for (const mipmap of mipmaps) {
            setTextureColorSpace(mipmap.texture, SRGBColorSpace);
          }
        }
      }
    }
    /**
     * Deletes internal render targets and textures.
     */
    dispose() {
      super.dispose();
      for (const mipmap of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) {
        mipmap.dispose();
      }
    }
  };


  var import_three38 = __require("three");
  var NormalPass = class extends Pass {
    /**
     * Constructs a new normal pass.
     *
     * @param {Scene} scene - The scene to render.
     * @param {Camera} camera - The camera to use to render the scene.
     * @param {Object} [options] - The options.
     * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
     * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     */
    constructor(scene, camera, {
      renderTarget,
      resolutionScale = 1,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("NormalPass");
      this.needsSwap = false;
      this.renderPass = new RenderPass(scene, camera, new import_three38.MeshNormalMaterial());
      const renderPass = this.renderPass;
      renderPass.ignoreBackground = true;
      renderPass.skipShadowMapUpdate = true;
      const clearPass = renderPass.getClearPass();
      clearPass.overrideClearColor = new import_three38.Color(7829503);
      clearPass.overrideClearAlpha = 1;
      this.renderTarget = renderTarget;
      if (this.renderTarget === void 0) {
        this.renderTarget = new import_three38.WebGLRenderTarget(1, 1, {
          minFilter: import_three38.NearestFilter,
          magFilter: import_three38.NearestFilter
        });
        this.renderTarget.texture.name = "NormalPass.Target";
      }
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    }
    set mainScene(value) {
      this.renderPass.mainScene = value;
    }
    set mainCamera(value) {
      this.renderPass.mainCamera = value;
    }
    /**
     * The normal texture.
     *
     * @type {Texture}
     */
    get texture() {
      return this.renderTarget.texture;
    }
    /**
     * The normal texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.renderTarget.texture;
    }
    /**
     * Returns the resolution settings.
     *
     * @deprecated Use resolution instead.
     * @return {Resolution} The resolution.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * Returns the current resolution scale.
     *
     * @return {Number} The resolution scale.
     * @deprecated Use resolution.preferredWidth or resolution.preferredHeight instead.
     */
    getResolutionScale() {
      return this.resolution.scale;
    }
    /**
     * Sets the resolution scale.
     *
     * @param {Number} scale - The new resolution scale.
     * @deprecated Use resolution.preferredWidth or resolution.preferredHeight instead.
     */
    setResolutionScale(scale) {
      this.resolution.scale = scale;
    }
    /**
     * Renders the scene normals.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const renderTarget = this.renderToScreen ? null : this.renderTarget;
      this.renderPass.render(renderer, renderTarget, renderTarget);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      this.renderTarget.setSize(resolution.width, resolution.height);
    }
  };


  var import_three39 = __require("three");
  var ShaderPass = class extends Pass {
    /**
     * Constructs a new shader pass.
     *
     * @param {ShaderMaterial} material - A shader material.
     * @param {String} [input="inputBuffer"] - The name of the input buffer uniform.
     */
    constructor(material, input = "inputBuffer") {
      super("ShaderPass");
      this.fullscreenMaterial = material;
      this.input = input;
    }
    /**
     * Sets the name of the input buffer uniform.
     *
     * @param {String} input - The name of the input buffer uniform.
     * @deprecated Use input instead.
     */
    setInput(input) {
      this.input = input;
    }
    /**
     * Renders the effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
      const uniforms = this.fullscreenMaterial.uniforms;
      if (inputBuffer !== null && uniforms !== void 0 && uniforms[this.input] !== void 0) {
        uniforms[this.input].value = inputBuffer.texture;
      }
      renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
      renderer.render(this.scene, this.camera);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - A renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      if (frameBufferType !== void 0 && frameBufferType !== import_three39.UnsignedByteType) {
        this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      }
    }
  };


  var TiltShiftBlurPass = class extends KawaseBlurPass {
    /**
     * Constructs a new Kawase blur pass.
     *
     * @param {Object} [options] - The options.
     * @param {Number} [options.offset=0.0] - The relative offset of the focus area.
     * @param {Number} [options.rotation=0.0] - The rotation of the focus area in radians.
     * @param {Number} [options.focusArea=0.4] - The relative size of the focus area.
     * @param {Number} [options.feather=0.3] - The softness of the focus area edges.
     * @param {KernelSize} [options.kernelSize=KernelSize.MEDIUM] - The blur kernel size.
     * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     */
    constructor({
      offset = 0,
      rotation = 0,
      focusArea = 0.4,
      feather = 0.3,
      kernelSize = KernelSize.MEDIUM,
      resolutionScale = 0.5,
      resolutionX = Resolution.AUTO_SIZE,
      resolutionY = Resolution.AUTO_SIZE
    } = {}) {
      super({ kernelSize, resolutionScale, resolutionX, resolutionY });
      this.blurMaterial = new TiltShiftBlurMaterial({ kernelSize, offset, rotation, focusArea, feather });
    }
  };


  var MILLISECONDS_TO_SECONDS = 1 / 1e3;
  var SECONDS_TO_MILLISECONDS = 1e3;
  var Timer = class {
    /**
     * Constructs a new timer.
     */
    constructor() {
      this.startTime = performance.now();
      this.previousTime = 0;
      this.currentTime = 0;
      this._delta = 0;
      this._elapsed = 0;
      this._fixedDelta = 1e3 / 60;
      this.timescale = 1;
      this.useFixedDelta = false;
      this._autoReset = false;
    }
    /**
     * Enables or disables auto reset based on page visibility.
     *
     * If enabled, the timer will be reset when the page becomes visible. This effectively pauses the timer when the page
     * is hidden. Has no effect if the API is not supported.
     *
     * @type {Boolean}

     */
    get autoReset() {
      return this._autoReset;
    }
    set autoReset(value) {
      if (typeof document !== "undefined" && document.hidden !== void 0) {
        if (value) {
          document.addEventListener("visibilitychange", this);
        } else {
          document.removeEventListener("visibilitychange", this);
        }
        this._autoReset = value;
      }
    }
    get delta() {
      return this._delta * MILLISECONDS_TO_SECONDS;
    }
    get fixedDelta() {
      return this._fixedDelta * MILLISECONDS_TO_SECONDS;
    }
    set fixedDelta(value) {
      this._fixedDelta = value * SECONDS_TO_MILLISECONDS;
    }
    get elapsed() {
      return this._elapsed * MILLISECONDS_TO_SECONDS;
    }
    /**
     * Updates this timer.
     *
     * @param {Boolean} [timestamp] - The current time in milliseconds.
     */
    update(timestamp) {
      if (this.useFixedDelta) {
        this._delta = this.fixedDelta;
      } else {
        this.previousTime = this.currentTime;
        this.currentTime = (timestamp !== void 0 ? timestamp : performance.now()) - this.startTime;
        this._delta = this.currentTime - this.previousTime;
      }
      this._delta *= this.timescale;
      this._elapsed += this._delta;
    }
    /**
     * Resets this timer.
     */
    reset() {
      this._delta = 0;
      this._elapsed = 0;
      this.currentTime = performance.now() - this.startTime;
    }
    handleEvent(e) {
      if (!document.hidden) {
        this.currentTime = performance.now() - this.startTime;
      }
    }
    dispose() {
      this.autoReset = false;
    }
  };


  var EffectComposer = class {
    /**
     * Constructs a new effect composer.
     *
     * @param {WebGLRenderer} renderer - The renderer that should be used.
     * @param {Object} [options] - The options.
     * @param {Boolean} [options.depthBuffer=true] - Whether the main render targets should have a depth buffer.
     * @param {Boolean} [options.stencilBuffer=false] - Whether the main render targets should have a stencil buffer.
     * @param {Boolean} [options.alpha] - Deprecated. Buffers are always RGBA since three r137.
     * @param {Number} [options.multisampling=0] - The number of samples used for multisample antialiasing. Requires WebGL 2.
     * @param {Number} [options.frameBufferType] - The type of the internal frame buffers. It's recommended to use HalfFloatType if possible.
     */
    constructor(renderer = null, {
      depthBuffer = true,
      stencilBuffer = false,
      multisampling = 0,
      frameBufferType
    } = {}) {
      this.renderer = null;
      this.inputBuffer = this.createBuffer(depthBuffer, stencilBuffer, frameBufferType, multisampling);
      this.outputBuffer = this.inputBuffer.clone();
      this.copyPass = new CopyPass();
      this.depthTexture = null;
      this.passes = [];
      this.timer = new Timer();
      this.autoRenderToScreen = true;
      this.setRenderer(renderer);
    }
    /**
     * The current amount of samples used for multisample anti-aliasing.
     *
     * @type {Number}
     */
    get multisampling() {
      return this.inputBuffer.samples || 0;
    }
    /**
     * Sets the amount of MSAA samples.
     *
     * Requires WebGL 2. Set to zero to disable multisampling.
     *
     * @type {Number}
     */
    set multisampling(value) {
      const buffer = this.inputBuffer;
      const multisampling = this.multisampling;
      if (multisampling > 0 && value > 0) {
        this.inputBuffer.samples = value;
        this.outputBuffer.samples = value;
        this.inputBuffer.dispose();
        this.outputBuffer.dispose();
      } else if (multisampling !== value) {
        this.inputBuffer.dispose();
        this.outputBuffer.dispose();
        this.inputBuffer = this.createBuffer(
          buffer.depthBuffer,
          buffer.stencilBuffer,
          buffer.texture.type,
          value
        );
        this.inputBuffer.depthTexture = this.depthTexture;
        this.outputBuffer = this.inputBuffer.clone();
      }
    }
    /**
     * Returns the internal timer.
     *
     * @return {Timer} The timer.
     */
    getTimer() {
      return this.timer;
    }
    /**
     * Returns the renderer.
     *
     * @return {WebGLRenderer} The renderer.
     */
    getRenderer() {
      return this.renderer;
    }
    /**
     * Sets the renderer.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     */
    setRenderer(renderer) {
      this.renderer = renderer;
      if (renderer !== null) {
        const size = renderer.getSize(new import_three40.Vector2());
        const alpha = renderer.getContext().getContextAttributes().alpha;
        const frameBufferType = this.inputBuffer.texture.type;
        if (frameBufferType === import_three40.UnsignedByteType && getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.inputBuffer.texture, SRGBColorSpace);
          setTextureColorSpace(this.outputBuffer.texture, SRGBColorSpace);
          this.inputBuffer.dispose();
          this.outputBuffer.dispose();
        }
        renderer.autoClear = false;
        this.setSize(size.width, size.height);
        for (const pass of this.passes) {
          pass.initialize(renderer, alpha, frameBufferType);
        }
      }
    }
    /**
     * Replaces the current renderer with the given one.
     *
     * The auto clear mechanism of the provided renderer will be disabled. If the new render size differs from the
     * previous one, all passes will be updated.
     *
     * By default, the DOM element of the current renderer will automatically be removed from its parent node and the DOM
     * element of the new renderer will take its place.
     *
     * @deprecated Use setRenderer instead.
     * @param {WebGLRenderer} renderer - The new renderer.
     * @param {Boolean} updateDOM - Indicates whether the old canvas should be replaced by the new one in the DOM.
     * @return {WebGLRenderer} The old renderer.
     */
    replaceRenderer(renderer, updateDOM = true) {
      const oldRenderer = this.renderer;
      const parent = oldRenderer.domElement.parentNode;
      this.setRenderer(renderer);
      if (updateDOM && parent !== null) {
        parent.removeChild(oldRenderer.domElement);
        parent.appendChild(renderer.domElement);
      }
      return oldRenderer;
    }
    /**
     * Creates a depth texture attachment that will be provided to all passes.
     *
     * Note: When a shader reads from a depth texture and writes to a render target that uses the same depth texture
     * attachment, the depth information will be lost. This happens even if `depthWrite` is disabled.
     *
     * @private
     * @return {DepthTexture} The depth texture.
     */
    createDepthTexture() {
      const depthTexture = this.depthTexture = new import_three40.DepthTexture();
      this.inputBuffer.depthTexture = depthTexture;
      this.inputBuffer.dispose();
      if (this.inputBuffer.stencilBuffer) {
        depthTexture.format = import_three40.DepthStencilFormat;
        depthTexture.type = import_three40.UnsignedInt248Type;
      } else {
        depthTexture.type = import_three40.UnsignedIntType;
      }
      return depthTexture;
    }
    /**
     * Deletes the current depth texture.
     *
     * @private
     */
    deleteDepthTexture() {
      if (this.depthTexture !== null) {
        this.depthTexture.dispose();
        this.depthTexture = null;
        this.inputBuffer.depthTexture = null;
        this.inputBuffer.dispose();
        for (const pass of this.passes) {
          pass.setDepthTexture(null);
        }
      }
    }
    /**
     * Creates a new render target.
     *
     * @deprecated Create buffers manually via WebGLRenderTarget instead.
     * @param {Boolean} depthBuffer - Whether the render target should have a depth buffer.
     * @param {Boolean} stencilBuffer - Whether the render target should have a stencil buffer.
     * @param {Number} type - The frame buffer type.
     * @param {Number} multisampling - The number of samples to use for antialiasing.
     * @return {WebGLRenderTarget} A new render target that equals the renderer's canvas.
     */
    createBuffer(depthBuffer, stencilBuffer, type, multisampling) {
      const renderer = this.renderer;
      const size = renderer === null ? new import_three40.Vector2() : renderer.getDrawingBufferSize(new import_three40.Vector2());
      const options = {
        minFilter: import_three40.LinearFilter,
        magFilter: import_three40.LinearFilter,
        stencilBuffer,
        depthBuffer,
        type
      };
      const renderTarget = new import_three40.WebGLRenderTarget(size.width, size.height, options);
      if (multisampling > 0) {
        renderTarget.ignoreDepthForMultisampleCopy = false;
        renderTarget.samples = multisampling;
      }
      if (type === import_three40.UnsignedByteType && getOutputColorSpace(renderer) === SRGBColorSpace) {
        setTextureColorSpace(renderTarget.texture, SRGBColorSpace);
      }
      renderTarget.texture.name = "EffectComposer.Buffer";
      renderTarget.texture.generateMipmaps = false;
      return renderTarget;
    }
    /**
     * Can be used to change the main scene for all registered passes and effects.
     *
     * @param {Scene} scene - The scene.
     */
    setMainScene(scene) {
      for (const pass of this.passes) {
        pass.mainScene = scene;
      }
    }
    /**
     * Can be used to change the main camera for all registered passes and effects.
     *
     * @param {Camera} camera - The camera.
     */
    setMainCamera(camera) {
      for (const pass of this.passes) {
        pass.mainCamera = camera;
      }
    }
    /**
     * Adds a pass, optionally at a specific index.
     *
     * @param {Pass} pass - A new pass.
     * @param {Number} [index] - An index at which the pass should be inserted.
     */
    addPass(pass, index) {
      const passes = this.passes;
      const renderer = this.renderer;
      const drawingBufferSize = renderer.getDrawingBufferSize(new import_three40.Vector2());
      const alpha = renderer.getContext().getContextAttributes().alpha;
      const frameBufferType = this.inputBuffer.texture.type;
      pass.setRenderer(renderer);
      pass.setSize(drawingBufferSize.width, drawingBufferSize.height);
      pass.initialize(renderer, alpha, frameBufferType);
      if (this.autoRenderToScreen) {
        if (passes.length > 0) {
          passes[passes.length - 1].renderToScreen = false;
        }
        if (pass.renderToScreen) {
          this.autoRenderToScreen = false;
        }
      }
      if (index !== void 0) {
        passes.splice(index, 0, pass);
      } else {
        passes.push(pass);
      }
      if (this.autoRenderToScreen) {
        passes[passes.length - 1].renderToScreen = true;
      }
      if (pass.needsDepthTexture || this.depthTexture !== null) {
        if (this.depthTexture === null) {
          const depthTexture = this.createDepthTexture();
          for (pass of passes) {
            pass.setDepthTexture(depthTexture);
          }
        } else {
          pass.setDepthTexture(this.depthTexture);
        }
      }
    }
    /**
     * Removes a pass.
     *
     * @param {Pass} pass - The pass.
     */
    removePass(pass) {
      const passes = this.passes;
      const index = passes.indexOf(pass);
      const exists = index !== -1;
      const removed = exists && passes.splice(index, 1).length > 0;
      if (removed) {
        if (this.depthTexture !== null) {
          const reducer = (a, b) => a || b.needsDepthTexture;
          const depthTextureRequired = passes.reduce(reducer, false);
          if (!depthTextureRequired) {
            if (pass.getDepthTexture() === this.depthTexture) {
              pass.setDepthTexture(null);
            }
            this.deleteDepthTexture();
          }
        }
        if (this.autoRenderToScreen) {
          if (index === passes.length) {
            pass.renderToScreen = false;
            if (passes.length > 0) {
              passes[passes.length - 1].renderToScreen = true;
            }
          }
        }
      }
    }
    /**
     * Removes all passes.
     */
    removeAllPasses() {
      const passes = this.passes;
      this.deleteDepthTexture();
      if (passes.length > 0) {
        if (this.autoRenderToScreen) {
          passes[passes.length - 1].renderToScreen = false;
        }
        this.passes = [];
      }
    }
    /**
     * Renders all enabled passes in the order in which they were added.
     *
     * @param {Number} [deltaTime] - The time since the last frame in seconds.
     */
    render(deltaTime) {
      const renderer = this.renderer;
      const copyPass = this.copyPass;
      let inputBuffer = this.inputBuffer;
      let outputBuffer = this.outputBuffer;
      let stencilTest = false;
      let context, stencil, buffer;
      if (deltaTime === void 0) {
        this.timer.update();
        deltaTime = this.timer.delta;
      }
      for (const pass of this.passes) {
        if (pass.enabled) {
          pass.render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest);
          if (pass.needsSwap) {
            if (stencilTest) {
              copyPass.renderToScreen = pass.renderToScreen;
              context = renderer.getContext();
              stencil = renderer.state.buffers.stencil;
              stencil.setFunc(context.NOTEQUAL, 1, 4294967295);
              copyPass.render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest);
              stencil.setFunc(context.EQUAL, 1, 4294967295);
            }
            buffer = inputBuffer;
            inputBuffer = outputBuffer;
            outputBuffer = buffer;
          }
          if (pass instanceof MaskPass) {
            stencilTest = true;
          } else if (pass instanceof ClearMaskPass) {
            stencilTest = false;
          }
        }
      }
    }
    /**
     * Sets the size of the buffers, passes and the renderer.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     * @param {Boolean} [updateStyle] - Determines whether the style of the canvas should be updated.
     */
    setSize(width, height, updateStyle) {
      const renderer = this.renderer;
      const currentSize = renderer.getSize(new import_three40.Vector2());
      if (width === void 0 || height === void 0) {
        width = currentSize.width;
        height = currentSize.height;
      }
      if (currentSize.width !== width || currentSize.height !== height) {
        renderer.setSize(width, height, updateStyle);
      }
      const drawingBufferSize = renderer.getDrawingBufferSize(new import_three40.Vector2());
      this.inputBuffer.setSize(drawingBufferSize.width, drawingBufferSize.height);
      this.outputBuffer.setSize(drawingBufferSize.width, drawingBufferSize.height);
      for (const pass of this.passes) {
        pass.setSize(drawingBufferSize.width, drawingBufferSize.height);
      }
    }
    /**
     * Resets this composer by deleting all passes and creating new buffers.
     */
    reset() {
      const autoReset = this.timer.autoReset;
      this.dispose();
      this.autoRenderToScreen = true;
      this.timer.autoReset = autoReset;
    }
    /**
     * Disposes this composer and all passes.
     */
    dispose() {
      for (const pass of this.passes) {
        pass.dispose();
      }
      this.passes = [];
      if (this.inputBuffer !== null) {
        this.inputBuffer.dispose();
      }
      if (this.outputBuffer !== null) {
        this.outputBuffer.dispose();
      }
      this.deleteDepthTexture();
      this.copyPass.dispose();
      this.timer.dispose();
    }
  };


  var EffectShaderData = class {
    /**
     * Constructs new shader data.
     */
    constructor() {
      this.shaderParts = /* @__PURE__ */ new Map([
        [EffectShaderSection.FRAGMENT_HEAD, null],
        [EffectShaderSection.FRAGMENT_MAIN_UV, null],
        [EffectShaderSection.FRAGMENT_MAIN_IMAGE, null],
        [EffectShaderSection.VERTEX_HEAD, null],
        [EffectShaderSection.VERTEX_MAIN_SUPPORT, null]
      ]);
      this.defines = /* @__PURE__ */ new Map();
      this.uniforms = /* @__PURE__ */ new Map();
      this.blendModes = /* @__PURE__ */ new Map();
      this.extensions = /* @__PURE__ */ new Set();
      this.attributes = EffectAttribute.NONE;
      this.varyings = /* @__PURE__ */ new Set();
      this.uvTransformation = false;
      this.readDepth = false;
      this.colorSpace = LinearSRGBColorSpace;
    }
  };


  function getCoefficients(n) {
    let result;
    if (n === 0) {
      result = new Float64Array(0);
    } else if (n === 1) {
      result = new Float64Array([1]);
    } else if (n > 1) {
      let row0 = new Float64Array(n);
      let row1 = new Float64Array(n);
      for (let y = 1; y <= n; ++y) {
        for (let x = 0; x < y; ++x) {
          row1[x] = x === 0 || x === y - 1 ? 1 : row0[x - 1] + row0[x];
        }
        result = row1;
        row1 = row0;
        row0 = result;
      }
    }
    return result;
  }
  var GaussKernel = class {
    /**
     * Constructs a new Gauss kernel.
     *
     * @param {Number} kernelSize - The kernel size. Should be an odd number in the range [3, 1020].
     * @param {Number} [edgeBias=2] - Determines how many edge coefficients should be cut off for increased accuracy.
     */
    constructor(kernelSize, edgeBias = 2) {
      this.weights = null;
      this.offsets = null;
      this.linearWeights = null;
      this.linearOffsets = null;
      this.generate(kernelSize, edgeBias);
    }
    /**
     * The number of steps for discrete sampling.
     *
     * @type {Number}
     */
    get steps() {
      return this.offsets === null ? 0 : this.offsets.length;
    }
    /**
     * The number of steps for linear sampling.
     *
     * @type {Number}
     */
    get linearSteps() {
      return this.linearOffsets === null ? 0 : this.linearOffsets.length;
    }
    /**
     * Generates the kernel.
     *
     * @private
     * @param {Number} kernelSize - The kernel size.
     * @param {Number} edgeBias - The amount of edge coefficients to ignore.
     */
    generate(kernelSize, edgeBias) {
      if (kernelSize < 3 || kernelSize > 1020) {
        throw new Error("The kernel size must be in the range [3, 1020]");
      }
      const n = kernelSize + edgeBias * 2;
      const coefficients = edgeBias > 0 ? getCoefficients(n).slice(edgeBias, -edgeBias) : getCoefficients(n);
      const mid = Math.floor((coefficients.length - 1) / 2);
      const sum = coefficients.reduce((a, b) => a + b, 0);
      const weights = coefficients.slice(mid);
      const offsets = [...Array(mid + 1).keys()];
      const linearWeights = new Float64Array(Math.floor(offsets.length / 2));
      const linearOffsets = new Float64Array(linearWeights.length);
      linearWeights[0] = weights[0] / sum;
      for (let i = 1, j = 1, l = offsets.length - 1; i < l; i += 2, ++j) {
        const offset0 = offsets[i], offset1 = offsets[i + 1];
        const weight0 = weights[i], weight1 = weights[i + 1];
        const w = weight0 + weight1;
        const o = (offset0 * weight0 + offset1 * weight1) / w;
        linearWeights[j] = w / sum;
        linearOffsets[j] = o;
      }
      for (let i = 0, l = weights.length, s = 1 / sum; i < l; ++i) {
        weights[i] *= s;
      }
      const linearWeightSum = (linearWeights.reduce((a, b) => a + b, 0) - linearWeights[0] * 0.5) * 2;
      if (linearWeightSum !== 0) {
        for (let i = 0, l = linearWeights.length, s = 1 / linearWeightSum; i < l; ++i) {
          linearWeights[i] *= s;
        }
      }
      this.offsets = offsets;
      this.weights = weights;
      this.linearOffsets = linearOffsets;
      this.linearWeights = linearWeights;
    }
  };


  var ImmutableTimer = class {
    /**
     * The current delta time in seconds.
     *
     * @type {Number}
     */
    get delta() {
      return NaN;
    }
    /**
     * The fixed delta time in seconds.
     *
     * @type {Number}
     */
    get fixedDelta() {
      return NaN;
    }
    /**
     * The elapsed time in seconds.
     *
     * @type {Number}
     */
    get elapsed() {
      return NaN;
    }
  };


  var Initializable = class {
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - A renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
    }
  };


  var import_three41 = __require("three");
  var workaroundEnabled = false;
  var OverrideMaterialManager = class {
    /**
     * Constructs a new override material manager.
     *
     * @param {Material} [material=null] - An override material.
     */
    constructor(material = null) {
      this.originalMaterials = /* @__PURE__ */ new Map();
      this.material = null;
      this.materials = null;
      this.materialsBackSide = null;
      this.materialsDoubleSide = null;
      this.materialsFlatShaded = null;
      this.materialsFlatShadedBackSide = null;
      this.materialsFlatShadedDoubleSide = null;
      this.setMaterial(material);
      this.meshCount = 0;
      this.replaceMaterial = (node) => {
        if (node.isMesh) {
          let materials;
          if (node.material.flatShading) {
            switch (node.material.side) {
              case import_three41.DoubleSide:
                materials = this.materialsFlatShadedDoubleSide;
                break;
              case import_three41.BackSide:
                materials = this.materialsFlatShadedBackSide;
                break;
              default:
                materials = this.materialsFlatShaded;
                break;
            }
          } else {
            switch (node.material.side) {
              case import_three41.DoubleSide:
                materials = this.materialsDoubleSide;
                break;
              case import_three41.BackSide:
                materials = this.materialsBackSide;
                break;
              default:
                materials = this.materials;
                break;
            }
          }
          this.originalMaterials.set(node, node.material);
          if (node.isSkinnedMesh) {
            node.material = materials[2];
          } else if (node.isInstancedMesh) {
            node.material = materials[1];
          } else {
            node.material = materials[0];
          }
          ++this.meshCount;
        }
      };
    }
    /**
     * Clones the given material.
     *
     * @private
     * @param {Material} material - The material.
     * @return {Material} The cloned material.
     */
    cloneMaterial(material) {
      if (!(material instanceof import_three41.ShaderMaterial)) {
        return material.clone();
      }
      const uniforms = material.uniforms;
      const textureUniforms = /* @__PURE__ */ new Map();
      for (const key in uniforms) {
        const value = uniforms[key].value;
        if (value.isRenderTargetTexture) {
          uniforms[key].value = null;
          textureUniforms.set(key, value);
        }
      }
      const clone = material.clone();
      for (const entry of textureUniforms) {
        uniforms[entry[0]].value = entry[1];
        clone.uniforms[entry[0]].value = entry[1];
      }
      return clone;
    }
    /**
     * Sets the override material.
     *
     * @param {Material} material - The material.
     */
    setMaterial(material) {
      this.disposeMaterials();
      this.material = material;
      if (material !== null) {
        const materials = this.materials = [
          this.cloneMaterial(material),
          this.cloneMaterial(material),
          this.cloneMaterial(material)
        ];
        for (const m2 of materials) {
          m2.uniforms = Object.assign({}, material.uniforms);
          m2.side = import_three41.FrontSide;
        }
        materials[2].skinning = true;
        this.materialsBackSide = materials.map((m2) => {
          const c2 = this.cloneMaterial(m2);
          c2.uniforms = Object.assign({}, material.uniforms);
          c2.side = import_three41.BackSide;
          return c2;
        });
        this.materialsDoubleSide = materials.map((m2) => {
          const c2 = this.cloneMaterial(m2);
          c2.uniforms = Object.assign({}, material.uniforms);
          c2.side = import_three41.DoubleSide;
          return c2;
        });
        this.materialsFlatShaded = materials.map((m2) => {
          const c2 = this.cloneMaterial(m2);
          c2.uniforms = Object.assign({}, material.uniforms);
          c2.flatShading = true;
          return c2;
        });
        this.materialsFlatShadedBackSide = materials.map((m2) => {
          const c2 = this.cloneMaterial(m2);
          c2.uniforms = Object.assign({}, material.uniforms);
          c2.flatShading = true;
          c2.side = import_three41.BackSide;
          return c2;
        });
        this.materialsFlatShadedDoubleSide = materials.map((m2) => {
          const c2 = this.cloneMaterial(m2);
          c2.uniforms = Object.assign({}, material.uniforms);
          c2.flatShading = true;
          c2.side = import_three41.DoubleSide;
          return c2;
        });
      }
    }
    /**
     * Renders the scene with the override material.
     *
     * @private
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Scene} scene - A scene.
     * @param {Camera} camera - A camera.
     */
    render(renderer, scene, camera) {
      const shadowMapEnabled = renderer.shadowMap.enabled;
      renderer.shadowMap.enabled = false;
      if (workaroundEnabled) {
        const originalMaterials = this.originalMaterials;
        this.meshCount = 0;
        scene.traverse(this.replaceMaterial);
        renderer.render(scene, camera);
        for (const entry of originalMaterials) {
          entry[0].material = entry[1];
        }
        if (this.meshCount !== originalMaterials.size) {
          originalMaterials.clear();
        }
      } else {
        const overrideMaterial = scene.overrideMaterial;
        scene.overrideMaterial = this.material;
        renderer.render(scene, camera);
        scene.overrideMaterial = overrideMaterial;
      }
      renderer.shadowMap.enabled = shadowMapEnabled;
    }
    /**
     * Deletes cloned override materials.
     *
     * @private
     */
    disposeMaterials() {
      if (this.material !== null) {
        const materials = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
        for (const m2 of materials) {
          m2.dispose();
        }
      }
    }
    /**
     * Performs cleanup tasks.
     */
    dispose() {
      this.originalMaterials.clear();
      this.disposeMaterials();
    }
    /**
     * Indicates whether the override material workaround is enabled.
     *
     * @type {Boolean}
     */
    static get workaroundEnabled() {
      return workaroundEnabled;
    }
    /**
     * Enables or disables the override material workaround globally.
     *
     * This only affects post processing passes and effects.
     *
     * @type {Boolean}
     */
    static set workaroundEnabled(value) {
      workaroundEnabled = value;
    }
  };


  var Resizable = class {
    /**
     * Sets the size of this object.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
    }
  };


  var import_three42 = __require("three");
  var AUTO_SIZE = -1;
  var Resolution = class extends import_three42.EventDispatcher {
    /**
     * Constructs a new resolution.
     *
     * TODO Remove resizable param.
     * @param {Resizable} resizable - A resizable object.
     * @param {Number} [width=Resolution.AUTO_SIZE] - The preferred width.
     * @param {Number} [height=Resolution.AUTO_SIZE] - The preferred height.
     * @param {Number} [scale=1.0] - A resolution scale.
     */
    constructor(resizable, width = AUTO_SIZE, height = AUTO_SIZE, scale = 1) {
      super();
      this.resizable = resizable;
      this.baseSize = new import_three42.Vector2(1, 1);
      this.preferredSize = new import_three42.Vector2(width, height);
      this.target = this.preferredSize;
      this.s = scale;
      this.effectiveSize = new import_three42.Vector2();
      this.addEventListener("change", () => this.updateEffectiveSize());
      this.updateEffectiveSize();
    }
    /**
     * Calculates the effective size.
     *
     * @private
     */
    updateEffectiveSize() {
      const base = this.baseSize;
      const preferred = this.preferredSize;
      const effective = this.effectiveSize;
      const scale = this.scale;
      if (preferred.width !== AUTO_SIZE) {
        effective.width = preferred.width;
      } else if (preferred.height !== AUTO_SIZE) {
        effective.width = Math.round(preferred.height * (base.width / Math.max(base.height, 1)));
      } else {
        effective.width = Math.round(base.width * scale);
      }
      if (preferred.height !== AUTO_SIZE) {
        effective.height = preferred.height;
      } else if (preferred.width !== AUTO_SIZE) {
        effective.height = Math.round(preferred.width / Math.max(base.width / Math.max(base.height, 1), 1));
      } else {
        effective.height = Math.round(base.height * scale);
      }
    }
    /**
     * The effective width.
     *
     * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base width will be returned.
     *
     * @type {Number}
     */
    get width() {
      return this.effectiveSize.width;
    }
    set width(value) {
      this.preferredWidth = value;
    }
    /**
     * The effective height.
     *
     * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base height will be returned.
     *
     * @type {Number}
     */
    get height() {
      return this.effectiveSize.height;
    }
    set height(value) {
      this.preferredHeight = value;
    }
    /**
     * Returns the effective width.
     *
     * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base width will be returned.
     *
     * @deprecated Use width instead.
     * @return {Number} The effective width.
     */
    getWidth() {
      return this.width;
    }
    /**
     * Returns the effective height.
     *
     * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base height will be returned.
     *
     * @deprecated Use height instead.
     * @return {Number} The effective height.
     */
    getHeight() {
      return this.height;
    }
    /**
     * The resolution scale.
     *
     * @type {Number}
     */
    get scale() {
      return this.s;
    }
    set scale(value) {
      if (this.s !== value) {
        this.s = value;
        this.preferredSize.setScalar(AUTO_SIZE);
        this.dispatchEvent({ type: "change" });
        this.resizable.setSize(this.baseSize.width, this.baseSize.height);
      }
    }
    /**
     * Returns the current resolution scale.
     *
     * @deprecated Use scale instead.
     * @return {Number} The scale.
     */
    getScale() {
      return this.scale;
    }
    /**
     * Sets the resolution scale.
     *
     * Also sets the preferred resolution to {@link Resizer.AUTO_SIZE}.
     *
     * @deprecated Use scale instead.
     * @param {Number} value - The scale.
     */
    setScale(value) {
      this.scale = value;
    }
    /**
     * The base width.
     *
     * @type {Number}
     */
    get baseWidth() {
      return this.baseSize.width;
    }
    set baseWidth(value) {
      if (this.baseSize.width !== value) {
        this.baseSize.width = value;
        this.dispatchEvent({ type: "change" });
        this.resizable.setSize(this.baseSize.width, this.baseSize.height);
      }
    }
    /**
     * Returns the base width.
     *
     * @deprecated Use baseWidth instead.
     * @return {Number} The base width.
     */
    getBaseWidth() {
      return this.baseWidth;
    }
    /**
     * Sets the base width.
     *
     * @deprecated Use baseWidth instead.
     * @param {Number} value - The width.
     */
    setBaseWidth(value) {
      this.baseWidth = value;
    }
    /**
     * The base height.
     *
     * @type {Number}
     */
    get baseHeight() {
      return this.baseSize.height;
    }
    set baseHeight(value) {
      if (this.baseSize.height !== value) {
        this.baseSize.height = value;
        this.dispatchEvent({ type: "change" });
        this.resizable.setSize(this.baseSize.width, this.baseSize.height);
      }
    }
    /**
     * Returns the base height.
     *
     * @deprecated Use baseHeight instead.
     * @return {Number} The base height.
     */
    getBaseHeight() {
      return this.baseHeight;
    }
    /**
     * Sets the base height.
     *
     * @deprecated Use baseHeight instead.
     * @param {Number} value - The height.
     */
    setBaseHeight(value) {
      this.baseHeight = value;
    }
    /**
     * Sets the base size.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setBaseSize(width, height) {
      if (this.baseSize.width !== width || this.baseSize.height !== height) {
        this.baseSize.set(width, height);
        this.dispatchEvent({ type: "change" });
        this.resizable.setSize(this.baseSize.width, this.baseSize.height);
      }
    }
    /**
     * The preferred width.
     *
     * @type {Number}
     */
    get preferredWidth() {
      return this.preferredSize.width;
    }
    set preferredWidth(value) {
      if (this.preferredSize.width !== value) {
        this.preferredSize.width = value;
        this.dispatchEvent({ type: "change" });
        this.resizable.setSize(this.baseSize.width, this.baseSize.height);
      }
    }
    /**
     * Returns the preferred width.
     *
     * @deprecated Use preferredWidth instead.
     * @return {Number} The preferred width.
     */
    getPreferredWidth() {
      return this.preferredWidth;
    }
    /**
     * Sets the preferred width.
     *
     * Use {@link Resizer.AUTO_SIZE} to automatically calculate the width based on the height and aspect ratio.
     *
     * @deprecated Use preferredWidth instead.
     * @param {Number} value - The width.
     */
    setPreferredWidth(value) {
      this.preferredWidth = value;
    }
    /**
     * The preferred height.
     *
     * @type {Number}
     */
    get preferredHeight() {
      return this.preferredSize.height;
    }
    set preferredHeight(value) {
      if (this.preferredSize.height !== value) {
        this.preferredSize.height = value;
        this.dispatchEvent({ type: "change" });
        this.resizable.setSize(this.baseSize.width, this.baseSize.height);
      }
    }
    /**
     * Returns the preferred height.
     *
     * @deprecated Use preferredHeight instead.
     * @return {Number} The preferred height.
     */
    getPreferredHeight() {
      return this.preferredHeight;
    }
    /**
     * Sets the preferred height.
     *
     * Use {@link Resizer.AUTO_SIZE} to automatically calculate the height based on the width and aspect ratio.
     *
     * @deprecated Use preferredHeight instead.
     * @param {Number} value - The height.
     */
    setPreferredHeight(value) {
      this.preferredHeight = value;
    }
    /**
     * Sets the preferred size.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setPreferredSize(width, height) {
      if (this.preferredSize.width !== width || this.preferredSize.height !== height) {
        this.preferredSize.set(width, height);
        this.dispatchEvent({ type: "change" });
        this.resizable.setSize(this.baseSize.width, this.baseSize.height);
      }
    }
    /**
     * Copies the given resolution.
     *
     * @param {Resolution} resolution - The resolution.
     */
    copy(resolution) {
      this.s = resolution.scale;
      this.baseSize.set(resolution.baseWidth, resolution.baseHeight);
      this.preferredSize.set(resolution.preferredWidth, resolution.preferredHeight);
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.baseSize.width, this.baseSize.height);
    }
    /**
     * An auto sizing constant.
     *
     * Can be used to automatically calculate the width or height based on the original aspect ratio.
     *
     * @type {Number}
     */
    static get AUTO_SIZE() {
      return AUTO_SIZE;
    }
  };


  var Selection = class extends Set {
    /**
     * Constructs a new selection.
     *
     * @param {Iterable<Object3D>} [iterable] - A collection of objects that should be added to this selection.
     * @param {Number} [layer=10] - A dedicated render layer for selected objects.
     */
    constructor(iterable, layer = 10) {
      super();
      this.l = layer;
      this.exclusive = false;
      if (iterable !== void 0) {
        this.set(iterable);
      }
    }
    /**
     * The render layer for selected objects.
     *
     * @type {Number}
     */
    get layer() {
      return this.l;
    }
    set layer(value) {
      const currentLayer = this.l;
      for (const object of this) {
        object.layers.disable(currentLayer);
        object.layers.enable(value);
      }
      this.l = value;
    }
    /**
     * Returns the current render layer for selected objects.
     *
     * The default layer is 10. If this collides with your own custom layers, please change it before rendering!
     *
     * @deprecated Use layer instead.
     * @return {Number} The layer.
     */
    getLayer() {
      return this.layer;
    }
    /**
     * Sets the render layer for selected objects.
     *
     * The current selection will be updated accordingly.
     *
     * @deprecated Use layer instead.
     * @param {Number} value - The layer. Range is [0, 31].
     */
    setLayer(value) {
      this.layer = value;
    }
    /**
     * Indicates whether objects that are added to this selection will be removed from all other layers.
     *
     * @deprecated Use exclusive instead.
     * @return {Number} Whether this selection is exclusive. Default is false.
     */
    isExclusive() {
      return this.exclusive;
    }
    /**
     * Controls whether objects that are added to this selection should be removed from all other layers.
     *
     * @deprecated Use exclusive instead.
     * @param {Number} value - Whether this selection should be exclusive.
     */
    setExclusive(value) {
      this.exclusive = value;
    }
    /**
     * Clears this selection.
     *
     * @return {Selection} This selection.
     */
    clear() {
      const layer = this.layer;
      for (const object of this) {
        object.layers.disable(layer);
      }
      return super.clear();
    }
    /**
     * Clears this selection and adds the given objects.
     *
     * @param {Iterable<Object3D>} objects - The objects that should be selected.
     * @return {Selection} This selection.
     */
    set(objects) {
      this.clear();
      for (const object of objects) {
        this.add(object);
      }
      return this;
    }
    /**
     * An alias for {@link has}.
     *
     * @param {Object3D} object - An object.
     * @return {Number} Returns 0 if the given object is currently selected, or -1 otherwise.
     * @deprecated Added for backward-compatibility.
     */
    indexOf(object) {
      return this.has(object) ? 0 : -1;
    }
    /**
     * Adds an object to this selection.
     *
     * If {@link exclusive} is set to `true`, the object will also be removed from all other layers.
     *
     * @param {Object3D} object - The object that should be selected.
     * @return {Selection} This selection.
     */
    add(object) {
      if (this.exclusive) {
        object.layers.set(this.layer);
      } else {
        object.layers.enable(this.layer);
      }
      return super.add(object);
    }
    /**
     * Removes an object from this selection.
     *
     * @param {Object3D} object - The object that should be deselected.
     * @return {Boolean} Returns true if an object has successfully been removed from this selection; otherwise false.
     */
    delete(object) {
      if (this.has(object)) {
        object.layers.disable(this.layer);
      }
      return super.delete(object);
    }
    /**
     * Removes an existing object from the selection. If the object doesn't exist it's added instead.
     *
     * @param {Object3D} object - The object.
     * @return {Boolean} Returns true if the object is added, false otherwise.
     */
    toggle(object) {
      let result;
      if (this.has(object)) {
        this.delete(object);
        result = false;
      } else {
        this.add(object);
        result = true;
      }
      return result;
    }
    /**
     * Sets the visibility of all selected objects.
     *
     * This method enables or disables render layer 0 of all selected objects.
     *
     * @param {Boolean} visible - Whether the selected objects should be visible.
     * @return {Selection} This selection.
     */
    setVisible(visible) {
      for (const object of this) {
        if (visible) {
          object.layers.enable(0);
        } else {
          object.layers.disable(0);
        }
      }
      return this;
    }
  };


  var import_three43 = __require("three");


  var add_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, x + y, opacity);\n\n}\n";


  var alpha_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, y, min(y.a, opacity));\n\n}\n";


  var average_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, (x + y) * 0.5, opacity);\n\n}\n";


  var color_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec3 xHSL = RGBToHSL(x.rgb);\n	vec3 yHSL = RGBToHSL(y.rgb);\n	vec3 z = HSLToRGB(vec3(yHSL.rg, xHSL.b));\n	return vec4(mix(x.rgb, z, opacity), y.a);\n\n}\n";


  var color_burn_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = mix(step(0.0, y) * (1.0 - min(vec4(1.0), (1.0 - x) / y)), vec4(1.0), step(1.0, x));\n	return mix(x, z, opacity);\n\n}\n";


  var color_dodge_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = step(0.0, x) * mix(min(vec4(1.0), x / max(1.0 - y, 1e-9)), vec4(1.0), step(1.0, y));\n	return mix(x, z, opacity);\n\n}\n";


  var darken_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, min(x, y), opacity);\n\n}\n";


  var difference_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, abs(x - y), opacity);\n\n}\n";


  var divide_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, x / max(y, 1e-12), opacity);\n\n}\n";


  var exclusion_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, (x + y - 2.0 * x * y), opacity);\n\n}\n";


  var hard_light_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 a = min(x, 1.0), b = min(y, 1.0);\n	vec4 z = mix(2.0 * a * b, 1.0 - 2.0 * (1.0 - a) * (1.0 - b), step(0.5, y));\n	return mix(x, z, opacity);\n\n}\n";


  var hard_mix_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, step(1.0, x + y), opacity);\n\n}\n";


  var hue_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec3 xHSL = RGBToHSL(x.rgb);\n	vec3 yHSL = RGBToHSL(y.rgb);\n	vec3 z = HSLToRGB(vec3(yHSL.r, xHSL.gb));\n	return vec4(mix(x.rgb, z, opacity), y.a);\n\n}\n";


  var invert_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, 1.0 - y, opacity);\n\n}\n";


  var invert_rgb_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, y * (1.0 - x), opacity);\n\n}\n";


  var lighten_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, max(x, y), opacity);\n\n}\n";


  var linear_burn_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, clamp(y + x - 1.0, 0.0, 1.0), opacity);\n\n}\n";


  var linear_dodge_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, min(x + y, 1.0), opacity);\n\n}\n";


  var linear_light_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, clamp(2.0 * y + x - 1.0, 0.0, 1.0), opacity);\n\n}\n";


  var luminosity_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec3 xHSL = RGBToHSL(x.rgb);\n	vec3 yHSL = RGBToHSL(y.rgb);\n	vec3 z = HSLToRGB(vec3(xHSL.rg, yHSL.b));\n	return vec4(mix(x.rgb, z, opacity), y.a);\n\n}\n";


  var multiply_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, x * y, opacity);\n\n}\n";


  var negation_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, 1.0 - abs(1.0 - x - y), opacity);\n\n}\n";


  var normal_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, y, opacity);\n\n}\n";


  var overlay_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = mix(2.0 * y * x, 1.0 - 2.0 * (1.0 - y) * (1.0 - x), step(0.5, x));\n	return mix(x, z, opacity);\n\n}\n";


  var pin_light_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 y2 = 2.0 * y;\n\n	vec4 z = mix(\n		mix(y2, x, step(0.5 * x, y)),\n		max(vec4(0.0), y2 - 1.0), \n		step(x, (y2 - 1.0))\n	);\n\n	return mix(x, z, opacity);\n\n}\n";


  var reflect_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = mix(min(x * x / max(1.0 - y, 1e-12), 1.0), y, step(1.0, y));\n	return mix(x, z, opacity);\n\n}\n";


  var saturation_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec3 xHSL = RGBToHSL(x.rgb);\n	vec3 yHSL = RGBToHSL(y.rgb);\n	vec3 z = HSLToRGB(vec3(xHSL.r, yHSL.g, xHSL.b));\n	return vec4(mix(x.rgb, z, opacity), y.a);\n\n}\n";


  var screen_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, x + y - min(x * y, 1.0), opacity);\n\n}\n";


  var soft_light_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 y2 = 2.0 * y;\n	vec4 w = step(0.5, y);\n\n	vec4 z = mix(\n		x - (1.0 - y2) * x * (1.0 - x), \n		mix(\n			x + (y2 - 1.0) * (sqrt(x) - x),\n			x + (y2 - 1.0) * x * ((16.0 * x - 12.0) * x + 3.0),\n			w * (1.0 - step(0.25, x))\n		),\n		w\n	);\n\n	return mix(x, z, opacity);\n\n}\n";


  var src_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return y;\n\n}\n";


  var subtract_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return mix(x, max(x + y - 1.0, 0.0), opacity);\n\n}\n";


  var vivid_light_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = mix(\n		max(1.0 - min((1.0 - x) / (2.0 * y), 1.0), 0.0),\n		min(x / (2.0 * (1.0 - y)), 1.0),\n		step(0.5, y)\n	);\n\n	return mix(x, z, opacity);\n\n}\n";


  var blendFunctions = /* @__PURE__ */ new Map([
    [BlendFunction.ADD, add_default],
    [BlendFunction.ALPHA, alpha_default],
    [BlendFunction.AVERAGE, average_default],
    [BlendFunction.COLOR, color_default],
    [BlendFunction.COLOR_BURN, color_burn_default],
    [BlendFunction.COLOR_DODGE, color_dodge_default],
    [BlendFunction.DARKEN, darken_default],
    [BlendFunction.DIFFERENCE, difference_default],
    [BlendFunction.DIVIDE, divide_default],
    [BlendFunction.DST, null],
    [BlendFunction.EXCLUSION, exclusion_default],
    [BlendFunction.HARD_LIGHT, hard_light_default],
    [BlendFunction.HARD_MIX, hard_mix_default],
    [BlendFunction.HUE, hue_default],
    [BlendFunction.INVERT, invert_default],
    [BlendFunction.INVERT_RGB, invert_rgb_default],
    [BlendFunction.LIGHTEN, lighten_default],
    [BlendFunction.LINEAR_BURN, linear_burn_default],
    [BlendFunction.LINEAR_DODGE, linear_dodge_default],
    [BlendFunction.LINEAR_LIGHT, linear_light_default],
    [BlendFunction.LUMINOSITY, luminosity_default],
    [BlendFunction.MULTIPLY, multiply_default],
    [BlendFunction.NEGATION, negation_default],
    [BlendFunction.NORMAL, normal_default],
    [BlendFunction.OVERLAY, overlay_default],
    [BlendFunction.PIN_LIGHT, pin_light_default],
    [BlendFunction.REFLECT, reflect_default],
    [BlendFunction.SATURATION, saturation_default],
    [BlendFunction.SCREEN, screen_default],
    [BlendFunction.SOFT_LIGHT, soft_light_default],
    [BlendFunction.SRC, src_default],
    [BlendFunction.SUBTRACT, subtract_default],
    [BlendFunction.VIVID_LIGHT, vivid_light_default]
  ]);
  var BlendMode = class extends import_three43.EventDispatcher {
    /**
     * Constructs a new blend mode.
     *
     * @param {BlendFunction} blendFunction - The blend function.
     * @param {Number} opacity - The opacity of the color that will be blended with the base color.
     */
    constructor(blendFunction, opacity = 1) {
      super();
      this._blendFunction = blendFunction;
      this.opacity = new import_three43.Uniform(opacity);
    }
    /**
     * Returns the opacity.
     *
     * @return {Number} The opacity.
     */
    getOpacity() {
      return this.opacity.value;
    }
    /**
     * Sets the opacity.
     *
     * @param {Number} value - The opacity.
     */
    setOpacity(value) {
      this.opacity.value = value;
    }
    /**
     * The blend function.
     *
     * @type {BlendFunction}
     */
    get blendFunction() {
      return this._blendFunction;
    }
    set blendFunction(value) {
      this._blendFunction = value;
      this.dispatchEvent({ type: "change" });
    }
    /**
     * Returns the blend function.
     *
     * @deprecated Use blendFunction instead.
     * @return {BlendFunction} The blend function.
     */
    getBlendFunction() {
      return this.blendFunction;
    }
    /**
     * Sets the blend function.
     *
     * @deprecated Use blendFunction instead.
     * @param {BlendFunction} value - The blend function.
     */
    setBlendFunction(value) {
      this.blendFunction = value;
    }
    /**
     * Returns the blend function shader code.
     *
     * @return {String} The blend function shader code.
     */
    getShaderCode() {
      return blendFunctions.get(this.blendFunction);
    }
  };


  var import_three45 = __require("three");


  var import_three44 = __require("three");
  var Effect = class extends import_three44.EventDispatcher {
    /**
     * Constructs a new effect.
     *
     * @param {String} name - The name of this effect. Doesn't have to be unique.
     * @param {String} fragmentShader - The fragment shader. This shader is required.
     * @param {Object} [options] - Additional options.
     * @param {EffectAttribute} [options.attributes=EffectAttribute.NONE] - The effect attributes that determine the execution priority and resource requirements.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
     * @param {Map<String, String>} [options.defines] - Custom preprocessor macro definitions. Keys are names and values are code.
     * @param {Map<String, Uniform>} [options.uniforms] - Custom shader uniforms. Keys are names and values are uniforms.
     * @param {Set<WebGLExtension>} [options.extensions] - WebGL extensions.
     * @param {String} [options.vertexShader=null] - The vertex shader. Most effects don't need one.
     */
    constructor(name, fragmentShader, {
      attributes = EffectAttribute.NONE,
      blendFunction = BlendFunction.NORMAL,
      defines = /* @__PURE__ */ new Map(),
      uniforms = /* @__PURE__ */ new Map(),
      extensions = null,
      vertexShader = null
    } = {}) {
      super();
      this.name = name;
      this.renderer = null;
      this.attributes = attributes;
      this.fragmentShader = fragmentShader;
      this.vertexShader = vertexShader;
      this.defines = defines;
      this.uniforms = uniforms;
      this.extensions = extensions;
      this.blendMode = new BlendMode(blendFunction);
      this.blendMode.addEventListener("change", (event) => this.setChanged());
      this._inputColorSpace = LinearSRGBColorSpace;
      this._outputColorSpace = NoColorSpace;
    }
    /**
     * The input color space.
     *
     * @type {ColorSpace}
     * @experimental
     */
    get inputColorSpace() {
      return this._inputColorSpace;
    }
    /**
     * @type {ColorSpace}
     * @protected
     * @experimental
     */
    set inputColorSpace(value) {
      this._inputColorSpace = value;
      this.setChanged();
    }
    /**
     * The output color space.
     *
     * Should only be changed if this effect converts the input colors to a different color space.
     *
     * @type {ColorSpace}
     * @experimental
     */
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    /**
     * @type {ColorSpace}
     * @protected
     * @experimental
     */
    set outputColorSpace(value) {
      this._outputColorSpace = value;
      this.setChanged();
    }
    /**
     * Sets the main scene.
     *
     * @type {Scene}
     */
    set mainScene(value) {
    }
    /**
     * Sets the main camera.
     *
     * @type {Camera}
     */
    set mainCamera(value) {
    }
    /**
     * Returns the name of this effect.
     *
     * @deprecated Use name instead.
     * @return {String} The name.
     */
    getName() {
      return this.name;
    }
    /**
     * Sets the renderer.
     *
     * @deprecated
     * @param {WebGLRenderer} renderer - The renderer.
     */
    setRenderer(renderer) {
      this.renderer = renderer;
    }
    /**
     * Returns the preprocessor macro definitions.
     *
     * @deprecated Use defines instead.
     * @return {Map<String, String>} The extensions.
     */
    getDefines() {
      return this.defines;
    }
    /**
     * Returns the uniforms of this effect.
     *
     * @deprecated Use uniforms instead.
     * @return {Map<String, Uniform>} The extensions.
     */
    getUniforms() {
      return this.uniforms;
    }
    /**
     * Returns the WebGL extensions that are required by this effect.
     *
     * @deprecated Use extensions instead.
     * @return {Set<WebGLExtension>} The extensions.
     */
    getExtensions() {
      return this.extensions;
    }
    /**
     * Returns the blend mode.
     *
     * The result of this effect will be blended with the result of the previous effect using this blend mode.
     *
     * @deprecated Use blendMode instead.
     * @return {BlendMode} The blend mode.
     */
    getBlendMode() {
      return this.blendMode;
    }
    /**
     * Returns the effect attributes.
     *
     * @return {EffectAttribute} The attributes.
     */
    getAttributes() {
      return this.attributes;
    }
    /**
     * Sets the effect attributes.
     *
     * Effects that have the same attributes will be executed in the order in which they were registered. Some attributes
     * imply a higher priority.
     *
     * @protected
     * @param {EffectAttribute} attributes - The attributes.
     */
    setAttributes(attributes) {
      this.attributes = attributes;
      this.setChanged();
    }
    /**
     * Returns the fragment shader.
     *
     * @return {String} The fragment shader.
     */
    getFragmentShader() {
      return this.fragmentShader;
    }
    /**
     * Sets the fragment shader.
     *
     * @protected
     * @param {String} fragmentShader - The fragment shader.
     */
    setFragmentShader(fragmentShader) {
      this.fragmentShader = fragmentShader;
      this.setChanged();
    }
    /**
     * Returns the vertex shader.
     *
     * @return {String} The vertex shader.
     */
    getVertexShader() {
      return this.vertexShader;
    }
    /**
     * Sets the vertex shader.
     *
     * @protected
     * @param {String} vertexShader - The vertex shader.
     */
    setVertexShader(vertexShader) {
      this.vertexShader = vertexShader;
      this.setChanged();
    }
    /**
     * Informs the associated {@link EffectPass} that this effect requires a shader recompilation.
     *
     * Should be called after changing macros or extensions and after adding/removing uniforms.
     *
     * @protected
     */
    setChanged() {
      this.dispatchEvent({ type: "change" });
    }
    /**
     * Sets the depth texture.
     *
     * You may override this method if your effect requires direct access to the depth texture that is bound to the
     * associated {@link EffectPass}.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
     */
    setDepthTexture(depthTexture, depthPacking = import_three44.BasicDepthPacking) {
    }
    /**
     * Updates this effect by performing supporting operations.
     *
     * This method is called by the {@link EffectPass} right before the main fullscreen render operation, even if the
     * blend function is set to `SKIP`.
     *
     * You may override this method if you need to update custom uniforms or render additional off-screen textures.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
    }
    /**
     * Updates the size of this effect.
     *
     * You may override this method if you want to be informed about the size of the backbuffer/canvas.
     * This method is called before {@link initialize} and every time the size of the {@link EffectComposer} changes.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
    }
    /**
     * Performs initialization tasks.
     *
     * This method is called when the associated {@link EffectPass} is added to an {@link EffectComposer}.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     * @example if(!alpha && frameBufferType === UnsignedByteType) { this.myRenderTarget.texture.format = RGBFormat; }
     */
    initialize(renderer, alpha, frameBufferType) {
    }
    /**
     * Performs a shallow search for properties that define a dispose method and deletes them.
     *
     * The {@link EffectComposer} calls this method when it is being destroyed.
     */
    dispose() {
      for (const key of Object.keys(this)) {
        const property = this[key];
        const isDisposable = property instanceof import_three44.WebGLRenderTarget || property instanceof import_three44.Material || property instanceof import_three44.Texture || property instanceof Pass;
        if (isDisposable) {
          this[key].dispose();
        }
      }
    }
  };


  var bloom_default = "#ifdef FRAMEBUFFER_PRECISION_HIGH\n\n	uniform mediump sampler2D map;\n\n#else\n\n	uniform lowp sampler2D map;\n\n#endif\n\nuniform float intensity;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	outputColor = texture2D(map, uv) * intensity;\n\n}\n";


  var BloomEffect = class extends Effect {
    /**
     * Constructs a new bloom effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function of this effect.
     * @param {Number} [options.luminanceThreshold=0.9] - The luminance threshold. Raise this value to mask out darker elements in the scene.
     * @param {Number} [options.luminanceSmoothing=0.025] - Controls the smoothness of the luminance threshold.
     * @param {Boolean} [options.mipmapBlur=false] - Enables or disables mipmap blur.
     * @param {Number} [options.intensity=1.0] - The bloom intensity.
     * @param {Number} [options.radius=0.85] - The blur radius. Only applies to mipmap blur.
     * @param {Number} [options.levels=8] - The amount of MIP levels. Only applies to mipmap blur.
     * @param {KernelSize} [options.kernelSize=KernelSize.LARGE] - Deprecated. Use mipmapBlur instead.
     * @param {Number} [options.resolutionScale=0.5] - Deprecated. Use mipmapBlur instead.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - Deprecated. Use mipmapBlur instead.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - Deprecated. Use mipmapBlur instead.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use mipmapBlur instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use mipmapBlur instead.
     */
    constructor({
      blendFunction = BlendFunction.SCREEN,
      luminanceThreshold = 0.9,
      luminanceSmoothing = 0.025,
      mipmapBlur = false,
      intensity = 1,
      radius = 0.85,
      levels = 8,
      kernelSize = KernelSize.LARGE,
      resolutionScale = 0.5,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("BloomEffect", bloom_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["map", new import_three45.Uniform(null)],
          ["intensity", new import_three45.Uniform(intensity)]
        ])
      });
      this.renderTarget = new import_three45.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTarget.texture.name = "Bloom.Target";
      this.blurPass = new KawaseBlurPass({ kernelSize });
      this.luminancePass = new LuminancePass({ colorOutput: true });
      this.luminanceMaterial.threshold = luminanceThreshold;
      this.luminanceMaterial.smoothing = luminanceSmoothing;
      this.mipmapBlurPass = new MipmapBlurPass();
      this.mipmapBlurPass.enabled = mipmapBlur;
      this.mipmapBlurPass.radius = radius;
      this.mipmapBlurPass.levels = levels;
      this.uniforms.get("map").value = mipmapBlur ? this.mipmapBlurPass.texture : this.renderTarget.texture;
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    }
    /**
     * A texture that contains the intermediate result of this effect.
     *
     * @type {Texture}
     */
    get texture() {
      return this.mipmapBlurPass.enabled ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    }
    /**
     * Returns the generated bloom texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.texture;
    }
    /**
     * Returns the resolution settings.
     *
     * @deprecated Use resolution instead.
     * @return {Resolution} The resolution.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * Returns the blur pass.
     *
     * @deprecated
     * @return {KawaseBlurPass} The blur pass.
     */
    getBlurPass() {
      return this.blurPass;
    }
    /**
     * Returns the luminance pass.
     *
     * @deprecated Use luminancePass instead.
     * @return {LuminancePass} The luminance pass.
     */
    getLuminancePass() {
      return this.luminancePass;
    }
    /**
     * The luminance material.
     *
     * @type {LuminanceMaterial}
     */
    get luminanceMaterial() {
      return this.luminancePass.fullscreenMaterial;
    }
    /**
     * Returns the luminance material.
     *
     * @deprecated Use luminanceMaterial instead.
     * @return {LuminanceMaterial} The material.
     */
    getLuminanceMaterial() {
      return this.luminancePass.fullscreenMaterial;
    }
    /**
     * The current width of the internal render targets.
     *
     * @type {Number}
     * @deprecated
     */
    get width() {
      return this.resolution.width;
    }
    set width(value) {
      this.resolution.preferredWidth = value;
    }
    /**
     * The current height of the internal render targets.
     *
     * @type {Number}
     * @deprecated
     */
    get height() {
      return this.resolution.height;
    }
    set height(value) {
      this.resolution.preferredHeight = value;
    }
    /**
     * Indicates whether dithering is enabled.
     *
     * @type {Boolean}
     * @deprecated Use EffectPass.dithering instead.
     */
    get dithering() {
      return this.blurPass.dithering;
    }
    set dithering(value) {
      this.blurPass.dithering = value;
    }
    /**
     * The blur kernel size.
     *
     * @type {KernelSize}
     * @deprecated
     */
    get kernelSize() {
      return this.blurPass.kernelSize;
    }
    set kernelSize(value) {
      this.blurPass.kernelSize = value;
    }
    /**
     * @type {Number}
     * @deprecated
     */
    get distinction() {
      console.warn(this.name, "distinction was removed");
      return 1;
    }
    set distinction(value) {
      console.warn(this.name, "distinction was removed");
    }
    /**
     * The bloom intensity.
     *
     * @type {Number}
     */
    get intensity() {
      return this.uniforms.get("intensity").value;
    }
    set intensity(value) {
      this.uniforms.get("intensity").value = value;
    }
    /**
     * The bloom intensity.
     *
     * @deprecated Use intensity instead.
     * @return {Number} The intensity.
     */
    getIntensity() {
      return this.intensity;
    }
    /**
     * Sets the bloom intensity.
     *
     * @deprecated Use intensity instead.
     * @param {Number} value - The intensity.
     */
    setIntensity(value) {
      this.intensity = value;
    }
    /**
     * Returns the current resolution scale.
     *
     * @return {Number} The resolution scale.
     * @deprecated
     */
    getResolutionScale() {
      return this.resolution.scale;
    }
    /**
     * Sets the resolution scale.
     *
     * @param {Number} scale - The new resolution scale.
     * @deprecated
     */
    setResolutionScale(scale) {
      this.resolution.scale = scale;
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      const renderTarget = this.renderTarget;
      const luminancePass = this.luminancePass;
      if (luminancePass.enabled) {
        luminancePass.render(renderer, inputBuffer);
        if (this.mipmapBlurPass.enabled) {
          this.mipmapBlurPass.render(renderer, luminancePass.renderTarget);
        } else {
          this.blurPass.render(renderer, luminancePass.renderTarget, renderTarget);
        }
      } else {
        if (this.mipmapBlurPass.enabled) {
          this.mipmapBlurPass.render(renderer, inputBuffer);
        } else {
          this.blurPass.render(renderer, inputBuffer, renderTarget);
        }
      }
    }
    /**
     * Updates the size of internal render targets.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      this.renderTarget.setSize(resolution.width, resolution.height);
      this.blurPass.resolution.copy(resolution);
      this.luminancePass.setSize(width, height);
      this.mipmapBlurPass.setSize(width, height);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      this.blurPass.initialize(renderer, alpha, frameBufferType);
      this.luminancePass.initialize(renderer, alpha, frameBufferType);
      this.mipmapBlurPass.initialize(renderer, alpha, frameBufferType);
      if (frameBufferType !== void 0) {
        this.renderTarget.texture.type = frameBufferType;
        if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.renderTarget.texture, SRGBColorSpace);
        }
      }
    }
  };


  var import_three46 = __require("three");





  var BokehEffect = class extends Effect {
    /**
     * Constructs a new bokeh effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
     * @param {Number} [options.focus=0.5] - The focus distance ratio, ranging from 0.0 to 1.0.
     * @param {Number} [options.dof=0.02] - Depth of field. An area in front of and behind the focal point that still appears sharp.
     * @param {Number} [options.aperture=0.015] - Camera aperture scale. Bigger values for stronger blur and shallower depth of field.
     * @param {Number} [options.maxBlur=1.0] - The maximum blur strength.
     */
    constructor({
      blendFunction,
      focus = 0.5,
      dof = 0.02,
      aperture = 0.015,
      maxBlur = 1
    } = {}) {
      super("BokehEffect", bokeh_default, {
        blendFunction,
        attributes: EffectAttribute.CONVOLUTION | EffectAttribute.DEPTH,
        uniforms: /* @__PURE__ */ new Map([
          ["focus", new import_three46.Uniform(focus)],
          ["dof", new import_three46.Uniform(dof)],
          ["aperture", new import_three46.Uniform(aperture)],
          ["maxBlur", new import_three46.Uniform(maxBlur)]
        ])
      });
    }
  };


  var import_three47 = __require("three");


  var brightness_contrast_default = "uniform float brightness;\nuniform float contrast;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	vec3 color = inputColor.rgb + vec3(brightness - 0.5);\n\n	if(contrast > 0.0) {\n\n		color /= vec3(1.0 - contrast);\n\n	} else {\n\n		color *= vec3(1.0 + contrast);\n\n	}\n\n	outputColor = vec4(color + vec3(0.5), inputColor.a);\n\n}\n";


  var BrightnessContrastEffect = class extends Effect {
    /**
     * Constructs a new brightness/contrast effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
     * @param {Number} [options.brightness=0.0] - The brightness factor, ranging from -1 to 1, where 0 means no change.
     * @param {Number} [options.contrast=0.0] - The contrast factor, ranging from -1 to 1, where 0 means no change.
     */
    constructor({ blendFunction = BlendFunction.SRC, brightness = 0, contrast = 0 } = {}) {
      super("BrightnessContrastEffect", brightness_contrast_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["brightness", new import_three47.Uniform(brightness)],
          ["contrast", new import_three47.Uniform(contrast)]
        ])
      });
      this.inputColorSpace = SRGBColorSpace;
    }
    /**
     * The brightness.
     *
     * @type {Number}
     */
    get brightness() {
      return this.uniforms.get("brightness").value;
    }
    set brightness(value) {
      this.uniforms.get("brightness").value = value;
    }
    /**
     * Returns the brightness.
     *
     * @deprecated Use brightness instead.
     * @return {Number} The brightness.
     */
    getBrightness() {
      return this.brightness;
    }
    /**
     * Sets the brightness.
     *
     * @deprecated Use brightness instead.
     * @param {Number} value - The brightness.
     */
    setBrightness(value) {
      this.brightness = value;
    }
    /**
     * The contrast.
     *
     * @type {Number}
     */
    get contrast() {
      return this.uniforms.get("contrast").value;
    }
    set contrast(value) {
      this.uniforms.get("contrast").value = value;
    }
    /**
     * Returns the contrast.
     *
     * @deprecated Use contrast instead.
     * @return {Number} The contrast.
     */
    getContrast() {
      return this.contrast;
    }
    /**
     * Sets the contrast.
     *
     * @deprecated Use contrast instead.
     * @param {Number} value - The contrast.
     */
    setContrast(value) {
      this.contrast = value;
    }
  };


  var color_average_default = "void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	outputColor = vec4(vec3(average(inputColor.rgb)), inputColor.a);\n\n}\n";


  var ColorAverageEffect = class extends Effect {
    /**
     * Constructs a new color average effect.
     *
     * @param {BlendFunction} [blendFunction] - The blend function of this effect.
     */
    constructor(blendFunction) {
      super("ColorAverageEffect", color_average_default, { blendFunction });
    }
  };


  var import_three48 = __require("three");


  var color_depth_default = "uniform float factor;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	outputColor = vec4(floor(inputColor.rgb * factor + 0.5) / factor, inputColor.a);\n\n}\n";


  var ColorDepthEffect = class extends Effect {
    /**
     * Constructs a new color depth effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
     * @param {Number} [options.bits=16] - The color bit depth.
     */
    constructor({ blendFunction, bits = 16 } = {}) {
      super("ColorDepthEffect", color_depth_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["factor", new import_three48.Uniform(1)]
        ])
      });
      this.bits = 0;
      this.bitDepth = bits;
    }
    /**
     * The virtual amount of color bits.
     *
     * Each color channel effectively uses a fourth of the total amount of bits. Alpha remains unaffected.
     *
     * @type {Number}
     */
    get bitDepth() {
      return this.bits;
    }
    set bitDepth(value) {
      this.bits = value;
      this.uniforms.get("factor").value = Math.pow(2, value / 3);
    }
    /**
     * Returns the current color bit depth.
     *
     * @return {Number} The bit depth.
     */
    getBitDepth() {
      return this.bitDepth;
    }
    /**
     * Sets the virtual amount of color bits.
     *
     * @param {Number} value - The bit depth.
     */
    setBitDepth(value) {
      this.bitDepth = value;
    }
  };


  var import_three49 = __require("three");


  var chromatic_aberration_default = "#ifdef RADIAL_MODULATION\n\n	uniform float modulationOffset;\n\n#endif\n\nvarying float vActive;\nvarying vec2 vUvR;\nvarying vec2 vUvB;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	vec2 ra = inputColor.ra;\n	vec2 ba = inputColor.ba;\n\n	#ifdef RADIAL_MODULATION\n\n		const vec2 center = vec2(0.5);\n		float d = distance(uv, center) * 2.0;\n		d = max(d - modulationOffset, 0.0);\n\n		if(vActive > 0.0 && d > 0.0) {\n\n			ra = texture2D(inputBuffer, mix(uv, vUvR, d)).ra;\n			ba = texture2D(inputBuffer, mix(uv, vUvB, d)).ba;\n\n		}\n\n	#else\n\n		if(vActive > 0.0) {\n\n			ra = texture2D(inputBuffer, vUvR).ra;\n			ba = texture2D(inputBuffer, vUvB).ba;\n\n		}\n\n	#endif\n\n	outputColor = vec4(ra.x, inputColor.g, ba.x, max(max(ra.y, ba.y), inputColor.a));\n\n}\n";


  var chromatic_aberration_default2 = "uniform vec2 offset;\n\nvarying float vActive;\nvarying vec2 vUvR;\nvarying vec2 vUvB;\n\nvoid mainSupport(const in vec2 uv) {\n\n	vec2 shift = offset * vec2(1.0, aspect);\n	vActive = (shift.x != 0.0 || shift.y != 0.0) ? 1.0 : 0.0;\n	vUvR = uv + shift;\n	vUvB = uv - shift;\n\n}\n";


  var ChromaticAberrationEffect = class extends Effect {
    /**
     * Constructs a new chromatic aberration effect.
     *
     * @param {Object} [options] - The options.
     * @param {Vector2} [options.offset] - The color offset.
     * @param {Boolean} [options.radialModulation=false] - Whether the effect should be modulated with a radial gradient.
     * @param {Number} [options.modulationOffset=0.15] - The modulation offset. Only applies if `radialModulation` is enabled.
     */
    constructor({
      offset = new import_three49.Vector2(1e-3, 5e-4),
      radialModulation = false,
      modulationOffset = 0.15
    } = {}) {
      super("ChromaticAberrationEffect", chromatic_aberration_default, {
        vertexShader: chromatic_aberration_default2,
        attributes: EffectAttribute.CONVOLUTION,
        uniforms: /* @__PURE__ */ new Map([
          ["offset", new import_three49.Uniform(offset)],
          ["modulationOffset", new import_three49.Uniform(modulationOffset)]
        ])
      });
      this.radialModulation = radialModulation;
    }
    /**
     * The color offset.
     *
     * @type {Vector2}
     */
    get offset() {
      return this.uniforms.get("offset").value;
    }
    set offset(value) {
      this.uniforms.get("offset").value = value;
    }
    /**
     * Indicates whether radial modulation is enabled.
     *
     * When enabled, the effect will be weaker in the middle and stronger towards the screen edges.
     *
     * @type {Boolean}
     */
    get radialModulation() {
      return this.defines.has("RADIAL_MODULATION");
    }
    set radialModulation(value) {
      if (value) {
        this.defines.set("RADIAL_MODULATION", "1");
      } else {
        this.defines.delete("RADIAL_MODULATION");
      }
      this.setChanged();
    }
    /**
     * The modulation offset.
     *
     * @type {Number}
     */
    get modulationOffset() {
      return this.uniforms.get("modulationOffset").value;
    }
    set modulationOffset(value) {
      this.uniforms.get("modulationOffset").value = value;
    }
    /**
     * Returns the color offset vector.
     *
     * @deprecated Use offset instead.
     * @return {Vector2} The offset.
     */
    getOffset() {
      return this.offset;
    }
    /**
     * Sets the color offset vector.
     *
     * @deprecated Use offset instead.
     * @param {Vector2} value - The offset.
     */
    setOffset(value) {
      this.offset = value;
    }
  };


  var depth_default = "void mainImage(const in vec4 inputColor, const in vec2 uv, const in float depth, out vec4 outputColor) {\n\n	#ifdef INVERTED\n\n		vec3 color = vec3(1.0 - depth);\n\n	#else\n\n		vec3 color = vec3(depth);\n\n	#endif\n\n	outputColor = vec4(color, inputColor.a);\n\n}\n";


  var DepthEffect = class extends Effect {
    /**
     * Constructs a new depth effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
     * @param {Boolean} [options.inverted=false] - Whether the depth should be inverted.
     */
    constructor({ blendFunction = BlendFunction.SRC, inverted = false } = {}) {
      super("DepthEffect", depth_default, {
        blendFunction,
        attributes: EffectAttribute.DEPTH
      });
      this.inverted = inverted;
    }
    /**
     * Indicates whether depth should be inverted.
     *
     * @type {Boolean}
     */
    get inverted() {
      return this.defines.has("INVERTED");
    }
    set inverted(value) {
      if (this.inverted !== value) {
        if (value) {
          this.defines.set("INVERTED", "1");
        } else {
          this.defines.delete("INVERTED");
        }
        this.setChanged();
      }
    }
    /**
     * Indicates whether the rendered depth is inverted.
     *
     * @deprecated Use inverted instead.
     * @return {Boolean} Whether the rendered depth is inverted.
     */
    isInverted() {
      return this.inverted;
    }
    /**
     * Enables or disables depth inversion.
     *
     * @deprecated Use inverted instead.
     * @param {Boolean} value - Whether depth should be inverted.
     */
    setInverted(value) {
      this.inverted = value;
    }
  };


  var import_three50 = __require("three");





  var DepthOfFieldEffect = class extends Effect {
    /**
     * Constructs a new depth of field effect.
     *
     * @param {Camera} camera - The main camera.
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
     * @param {Number} [options.worldFocusDistance] - The focus distance in world units.
     * @param {Number} [options.worldFocusRange] - The focus distance in world units.
     * @param {Number} [options.focusDistance=0.0] - The normalized focus distance. Range is [0.0, 1.0].
     * @param {Number} [options.focusRange=0.1] - The focus range. Range is [0.0, 1.0].
     * @param {Number} [options.focalLength=0.1] - Deprecated.
     * @param {Number} [options.bokehScale=1.0] - The scale of the bokeh blur.
     * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     */
    constructor(camera, {
      blendFunction,
      worldFocusDistance,
      worldFocusRange,
      focusDistance = 0,
      focalLength = 0.1,
      focusRange = focalLength,
      bokehScale = 1,
      resolutionScale = 1,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("DepthOfFieldEffect", depth_of_field_default, {
        blendFunction,
        attributes: EffectAttribute.DEPTH,
        uniforms: /* @__PURE__ */ new Map([
          ["nearColorBuffer", new import_three50.Uniform(null)],
          ["farColorBuffer", new import_three50.Uniform(null)],
          ["nearCoCBuffer", new import_three50.Uniform(null)],
          ["scale", new import_three50.Uniform(1)]
        ])
      });
      this.camera = camera;
      this.renderTarget = new import_three50.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTarget.texture.name = "DoF.Intermediate";
      this.renderTargetMasked = this.renderTarget.clone();
      this.renderTargetMasked.texture.name = "DoF.Masked.Far";
      this.renderTargetNear = this.renderTarget.clone();
      this.renderTargetNear.texture.name = "DoF.Bokeh.Near";
      this.uniforms.get("nearColorBuffer").value = this.renderTargetNear.texture;
      this.renderTargetFar = this.renderTarget.clone();
      this.renderTargetFar.texture.name = "DoF.Bokeh.Far";
      this.uniforms.get("farColorBuffer").value = this.renderTargetFar.texture;
      this.renderTargetCoC = this.renderTarget.clone();
      this.renderTargetCoC.texture.name = "DoF.CoC";
      this.renderTargetCoCBlurred = this.renderTargetCoC.clone();
      this.renderTargetCoCBlurred.texture.name = "DoF.CoC.Blurred";
      this.uniforms.get("nearCoCBuffer").value = this.renderTargetCoCBlurred.texture;
      this.cocPass = new ShaderPass(new CircleOfConfusionMaterial(camera));
      const cocMaterial = this.cocMaterial;
      cocMaterial.focusDistance = focusDistance;
      cocMaterial.focusRange = focusRange;
      if (worldFocusDistance !== void 0) {
        cocMaterial.worldFocusDistance = worldFocusDistance;
      }
      if (worldFocusRange !== void 0) {
        cocMaterial.worldFocusRange = worldFocusRange;
      }
      this.blurPass = new KawaseBlurPass({ resolutionScale, resolutionX, resolutionY, kernelSize: KernelSize.MEDIUM });
      this.maskPass = new ShaderPass(new MaskMaterial(this.renderTargetCoC.texture));
      const maskMaterial = this.maskPass.fullscreenMaterial;
      maskMaterial.maskFunction = MaskFunction.MULTIPLY_RGB_SET_ALPHA;
      maskMaterial.colorChannel = ColorChannel.GREEN;
      this.bokehNearBasePass = new ShaderPass(new BokehMaterial(false, true));
      this.bokehNearBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture;
      this.bokehNearFillPass = new ShaderPass(new BokehMaterial(true, true));
      this.bokehNearFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture;
      this.bokehFarBasePass = new ShaderPass(new BokehMaterial(false, false));
      this.bokehFarBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture;
      this.bokehFarFillPass = new ShaderPass(new BokehMaterial(true, false));
      this.bokehFarFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture;
      this.target = null;
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
      this.bokehScale = bokehScale;
    }
    set mainCamera(value) {
      this.camera = value;
      this.cocMaterial.copyCameraSettings(value);
    }
    /**
     * The circle of confusion texture.
     *
     * @type {Texture}
     */
    get cocTexture() {
      return this.renderTargetCoC.texture;
    }
    /**
     * The circle of confusion material.
     *
     * @type {CircleOfConfusionMaterial}
     */
    get cocMaterial() {
      return this.cocPass.fullscreenMaterial;
    }
    /**
     * The circle of confusion material.
     *
     * @deprecated Use cocMaterial instead.
     * @type {CircleOfConfusionMaterial}
     */
    get circleOfConfusionMaterial() {
      return this.cocMaterial;
    }
    /**
     * Returns the circle of confusion material.
     *
     * @deprecated Use cocMaterial instead.
     * @return {CircleOfConfusionMaterial} The material.
     */
    getCircleOfConfusionMaterial() {
      return this.circleOfConfusionMaterial;
    }
    /**
     * Returns the pass that blurs the foreground CoC buffer to soften edges.
     *
     * @deprecated Use blurPass instead.
     * @return {KawaseBlurPass} The blur pass.
     */
    getBlurPass() {
      return this.blurPass;
    }
    /**
     * Returns the resolution settings.
     *
     * @deprecated Use resolution instead.
     * @return {Resolution} The resolution.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * The current bokeh scale.
     *
     * @type {Number}
     */
    get bokehScale() {
      return this.uniforms.get("scale").value;
    }
    set bokehScale(value) {
      this.bokehNearBasePass.fullscreenMaterial.scale = value;
      this.bokehNearFillPass.fullscreenMaterial.scale = value;
      this.bokehFarBasePass.fullscreenMaterial.scale = value;
      this.bokehFarFillPass.fullscreenMaterial.scale = value;
      this.maskPass.fullscreenMaterial.strength = value;
      this.uniforms.get("scale").value = value;
    }
    /**
     * Returns the current bokeh scale.
     *
     * @deprecated Use bokehScale instead.
     * @return {Number} The scale.
     */
    getBokehScale() {
      return this.bokehScale;
    }
    /**
     * Sets the bokeh scale.
     *
     * @deprecated Use bokehScale instead.
     * @param {Number} value - The scale.
     */
    setBokehScale(value) {
      this.bokehScale = value;
    }
    /**
     * Returns the current auto focus target.
     *
     * @deprecated Use target instead.
     * @return {Vector3} The target.
     */
    getTarget() {
      return this.target;
    }
    /**
     * Sets the auto focus target.
     *
     * @deprecated Use target instead.
     * @param {Vector3} value - The target.
     */
    setTarget(value) {
      this.target = value;
    }
    /**
     * Calculates the focus distance from the camera to the given position.
     *
     * @param {Vector3} target - The target.
     * @return {Number} The normalized focus distance.
     */
    calculateFocusDistance(target) {
      const camera = this.camera;
      const distance = camera.position.distanceTo(target);
      return viewZToOrthographicDepth(-distance, camera.near, camera.far);
    }
    /**
     * Sets the depth texture.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
     */
    setDepthTexture(depthTexture, depthPacking = import_three50.BasicDepthPacking) {
      this.circleOfConfusionMaterial.depthBuffer = depthTexture;
      this.circleOfConfusionMaterial.depthPacking = depthPacking;
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      const renderTarget = this.renderTarget;
      const renderTargetCoC = this.renderTargetCoC;
      const renderTargetCoCBlurred = this.renderTargetCoCBlurred;
      const renderTargetMasked = this.renderTargetMasked;
      if (this.target !== null) {
        const distance = this.calculateFocusDistance(this.target);
        this.cocMaterial.focusDistance = distance;
      }
      this.cocPass.render(renderer, null, renderTargetCoC);
      this.blurPass.render(renderer, renderTargetCoC, renderTargetCoCBlurred);
      this.maskPass.render(renderer, inputBuffer, renderTargetMasked);
      this.bokehFarBasePass.render(renderer, renderTargetMasked, renderTarget);
      this.bokehFarFillPass.render(renderer, renderTarget, this.renderTargetFar);
      this.bokehNearBasePass.render(renderer, inputBuffer, renderTarget);
      this.bokehNearFillPass.render(renderer, renderTarget, this.renderTargetNear);
    }
    /**
     * Updates the size of internal render targets.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      const w = resolution.width, h = resolution.height;
      this.cocPass.setSize(width, height);
      this.blurPass.setSize(width, height);
      this.maskPass.setSize(width, height);
      this.renderTargetCoC.setSize(width, height);
      this.renderTargetMasked.setSize(width, height);
      this.renderTarget.setSize(w, h);
      this.renderTargetNear.setSize(w, h);
      this.renderTargetFar.setSize(w, h);
      this.renderTargetCoCBlurred.setSize(w, h);
      this.bokehNearBasePass.fullscreenMaterial.setSize(width, height);
      this.bokehNearFillPass.fullscreenMaterial.setSize(width, height);
      this.bokehFarBasePass.fullscreenMaterial.setSize(width, height);
      this.bokehFarFillPass.fullscreenMaterial.setSize(width, height);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      this.cocPass.initialize(renderer, alpha, frameBufferType);
      this.maskPass.initialize(renderer, alpha, frameBufferType);
      this.bokehNearBasePass.initialize(renderer, alpha, frameBufferType);
      this.bokehNearFillPass.initialize(renderer, alpha, frameBufferType);
      this.bokehFarBasePass.initialize(renderer, alpha, frameBufferType);
      this.bokehFarFillPass.initialize(renderer, alpha, frameBufferType);
      this.blurPass.initialize(renderer, alpha, import_three50.UnsignedByteType);
      if (renderer.capabilities.logarithmicDepthBuffer) {
        this.cocPass.fullscreenMaterial.defines.LOG_DEPTH = "1";
      }
      if (frameBufferType !== void 0) {
        this.renderTarget.texture.type = frameBufferType;
        this.renderTargetNear.texture.type = frameBufferType;
        this.renderTargetFar.texture.type = frameBufferType;
        this.renderTargetMasked.texture.type = frameBufferType;
        if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.renderTarget.texture, SRGBColorSpace);
          setTextureColorSpace(this.renderTargetNear.texture, SRGBColorSpace);
          setTextureColorSpace(this.renderTargetFar.texture, SRGBColorSpace);
          setTextureColorSpace(this.renderTargetMasked.texture, SRGBColorSpace);
        }
      }
    }
  };


  var import_three51 = __require("three");


  var dot_screen_default = "uniform vec2 angle;\nuniform float scale;\n\nfloat pattern(const in vec2 uv) {\n\n	vec2 point = scale * vec2(\n		dot(angle.yx, vec2(uv.x, -uv.y)),\n		dot(angle, uv)\n	);\n\n	return (sin(point.x) * sin(point.y)) * 4.0;\n\n}\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	vec3 color = vec3(inputColor.rgb * 10.0 - 5.0 + pattern(uv * resolution));\n	outputColor = vec4(color, inputColor.a);\n\n}\n";


  var DotScreenEffect = class extends Effect {
    /**
     * Constructs a new dot screen effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
     * @param {Number} [options.angle=1.57] - The angle of the dot pattern.
     * @param {Number} [options.scale=1.0] - The scale of the dot pattern.
     */
    constructor({ blendFunction, angle = Math.PI * 0.5, scale = 1 } = {}) {
      super("DotScreenEffect", dot_screen_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["angle", new import_three51.Uniform(new import_three51.Vector2())],
          ["scale", new import_three51.Uniform(scale)]
        ])
      });
      this.angle = angle;
    }
    /**
     * The angle.
     *
     * @type {Number}
     */
    get angle() {
      return Math.acos(this.uniforms.get("angle").value.y);
    }
    set angle(value) {
      this.uniforms.get("angle").value.set(Math.sin(value), Math.cos(value));
    }
    /**
     * Returns the pattern angle.
     *
     * @deprecated Use angle instead.
     * @return {Number} The angle in radians.
     */
    getAngle() {
      return this.angle;
    }
    /**
     * Sets the pattern angle.
     *
     * @deprecated Use angle instead.
     * @param {Number} value - The angle in radians.
     */
    setAngle(value) {
      this.angle = value;
    }
    /**
     * The scale.
     *
     * @type {Number}
     */
    get scale() {
      return this.uniforms.get("scale").value;
    }
    set scale(value) {
      this.uniforms.get("scale").value = value;
    }
  };


  var fxaa_default = `/**
 * FXAA 3.11 by Timothy Lottes
 *
 * Copyright (c) 2011, NVIDIA CORPORATION. All rights reserved.
 *
 * TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THIS SOFTWARE IS PROVIDED "AS IS" AND NVIDIA AND ITS SUPPLIERS
 * DISCLAIM ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT SHALL NVIDIA OR ITS SUPPLIERS BE LIABLE FOR ANY
 * SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS
 * OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS) ARISING OUT OF
 * THE USE OF OR INABILITY TO USE THIS SOFTWARE, EVEN IF NVIDIA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
 */

#if THREE_REVISION < 143

	#define luminance(v) linearToRelativeLuminance(v)

#endif

#define QUALITY(q) ((q) < 5 ? 1.0 : ((q) > 5 ? ((q) < 10 ? 2.0 : ((q) < 11 ? 4.0 : 8.0)) : 1.5))
#define ONE_OVER_TWELVE 0.08333333333333333

varying vec2 vUvDown;
varying vec2 vUvUp;
varying vec2 vUvLeft;
varying vec2 vUvRight;

varying vec2 vUvDownLeft;
varying vec2 vUvUpRight;
varying vec2 vUvUpLeft;
varying vec2 vUvDownRight;

vec4 fxaa(const in vec4 inputColor, const in vec2 uv) {


	float lumaCenter = luminance(inputColor.rgb);


	float lumaDown = luminance(texture2D(inputBuffer, vUvDown).rgb);
	float lumaUp = luminance(texture2D(inputBuffer, vUvUp).rgb);
	float lumaLeft = luminance(texture2D(inputBuffer, vUvLeft).rgb);
	float lumaRight = luminance(texture2D(inputBuffer, vUvRight).rgb);


	float lumaMin = min(lumaCenter, min(min(lumaDown, lumaUp), min(lumaLeft, lumaRight)));
	float lumaMax = max(lumaCenter, max(max(lumaDown, lumaUp), max(lumaLeft, lumaRight)));


	float lumaRange = lumaMax - lumaMin;


	if(lumaRange < max(EDGE_THRESHOLD_MIN, lumaMax * EDGE_THRESHOLD_MAX)) {

		return inputColor;

	}


	float lumaDownLeft = luminance(texture2D(inputBuffer, vUvDownLeft).rgb);
	float lumaUpRight = luminance(texture2D(inputBuffer, vUvUpRight).rgb);
	float lumaUpLeft = luminance(texture2D(inputBuffer, vUvUpLeft).rgb);
	float lumaDownRight = luminance(texture2D(inputBuffer, vUvDownRight).rgb);


	float lumaDownUp = lumaDown + lumaUp;
	float lumaLeftRight = lumaLeft + lumaRight;


	float lumaLeftCorners = lumaDownLeft + lumaUpLeft;
	float lumaDownCorners = lumaDownLeft + lumaDownRight;
	float lumaRightCorners = lumaDownRight + lumaUpRight;
	float lumaUpCorners = lumaUpRight + lumaUpLeft;


	float edgeHorizontal = (
		abs(-2.0 * lumaLeft + lumaLeftCorners) +
		abs(-2.0 * lumaCenter + lumaDownUp ) * 2.0 +
		abs(-2.0 * lumaRight + lumaRightCorners)
	);

	float edgeVertical = (
		abs(-2.0 * lumaUp + lumaUpCorners) +
		abs(-2.0 * lumaCenter + lumaLeftRight) * 2.0 +
		abs(-2.0 * lumaDown + lumaDownCorners)
	);


	bool isHorizontal = (edgeHorizontal >= edgeVertical);


	float stepLength = isHorizontal ? texelSize.y : texelSize.x;


	float luma1 = isHorizontal ? lumaDown : lumaLeft;
	float luma2 = isHorizontal ? lumaUp : lumaRight;


	float gradient1 = abs(luma1 - lumaCenter);
	float gradient2 = abs(luma2 - lumaCenter);


	bool is1Steepest = gradient1 >= gradient2;


	float gradientScaled = 0.25 * max(gradient1, gradient2);


	float lumaLocalAverage = 0.0;

	if(is1Steepest) {


		stepLength = -stepLength;
		lumaLocalAverage = 0.5 * (luma1 + lumaCenter);

	} else {

		lumaLocalAverage = 0.5 * (luma2 + lumaCenter);

	}


	vec2 currentUv = uv;

	if(isHorizontal) {

		currentUv.y += stepLength * 0.5;

	} else {

		currentUv.x += stepLength * 0.5;

	}


	vec2 offset = isHorizontal ? vec2(texelSize.x, 0.0) : vec2(0.0, texelSize.y);


	vec2 uv1 = currentUv - offset * QUALITY(0);
	vec2 uv2 = currentUv + offset * QUALITY(0);


	float lumaEnd1 = luminance(texture2D(inputBuffer, uv1).rgb);
	float lumaEnd2 = luminance(texture2D(inputBuffer, uv2).rgb);
	lumaEnd1 -= lumaLocalAverage;
	lumaEnd2 -= lumaLocalAverage;


	bool reached1 = abs(lumaEnd1) >= gradientScaled;
	bool reached2 = abs(lumaEnd2) >= gradientScaled;
	bool reachedBoth = reached1 && reached2;


	if(!reached1) {

		uv1 -= offset * QUALITY(1);

	}

	if(!reached2) {

		uv2 += offset * QUALITY(1);

	}


	if(!reachedBoth) {

		for(int i = 2; i < SAMPLES; ++i) {


			if(!reached1) {

				lumaEnd1 = luminance(texture2D(inputBuffer, uv1).rgb);
				lumaEnd1 = lumaEnd1 - lumaLocalAverage;

			}


			if(!reached2) {

				lumaEnd2 = luminance(texture2D(inputBuffer, uv2).rgb);
				lumaEnd2 = lumaEnd2 - lumaLocalAverage;

			}


			reached1 = abs(lumaEnd1) >= gradientScaled;
			reached2 = abs(lumaEnd2) >= gradientScaled;
			reachedBoth = reached1 && reached2;
			

			if(!reached1) {

				uv1 -= offset * QUALITY(i);

			}

			if(!reached2) {

				uv2 += offset * QUALITY(i);

			}


			if(reachedBoth) {

				break;

			}

		}

	}


	float distance1 = isHorizontal ? (uv.x - uv1.x) : (uv.y - uv1.y);
	float distance2 = isHorizontal ? (uv2.x - uv.x) : (uv2.y - uv.y);


	bool isDirection1 = distance1 < distance2;
	float distanceFinal = min(distance1, distance2);


	float edgeThickness = (distance1 + distance2);


	bool isLumaCenterSmaller = lumaCenter < lumaLocalAverage;


	bool correctVariation1 = (lumaEnd1 < 0.0) != isLumaCenterSmaller;
	bool correctVariation2 = (lumaEnd2 < 0.0) != isLumaCenterSmaller;


	bool correctVariation = isDirection1 ? correctVariation1 : correctVariation2;


	float pixelOffset = -distanceFinal / edgeThickness + 0.5;


	float finalOffset = correctVariation ? pixelOffset : 0.0;



	float lumaAverage = ONE_OVER_TWELVE * (2.0 * (lumaDownUp + lumaLeftRight) + lumaLeftCorners + lumaRightCorners);

	float subPixelOffset1 = clamp(abs(lumaAverage - lumaCenter) / lumaRange, 0.0, 1.0);
	float subPixelOffset2 = (-2.0 * subPixelOffset1 + 3.0) * subPixelOffset1 * subPixelOffset1;

	float subPixelOffsetFinal = subPixelOffset2 * subPixelOffset2 * SUBPIXEL_QUALITY;


	finalOffset = max(finalOffset, subPixelOffsetFinal);


	vec2 finalUv = uv;

	if(isHorizontal) {

		finalUv.y += finalOffset * stepLength;

	} else {

		finalUv.x += finalOffset * stepLength;

	}

	return texture2D(inputBuffer, finalUv);

}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {

	outputColor = fxaa(inputColor, uv);

}
`;


  var fxaa_default2 = "varying vec2 vUvDown;\nvarying vec2 vUvUp;\nvarying vec2 vUvLeft;\nvarying vec2 vUvRight;\n\nvarying vec2 vUvDownLeft;\nvarying vec2 vUvUpRight;\nvarying vec2 vUvUpLeft;\nvarying vec2 vUvDownRight;\n\nvoid mainSupport(const in vec2 uv) {\n\n	vUvDown = uv + vec2(0.0, -1.0) * texelSize;\n	vUvUp = uv + vec2(0.0, 1.0) * texelSize;\n	vUvRight = uv + vec2(1.0, 0.0) * texelSize;\n	vUvLeft = uv + vec2(-1.0, 0.0) * texelSize;\n\n	vUvDownLeft = uv + vec2(-1.0, -1.0) * texelSize;\n	vUvUpRight = uv + vec2(1.0, 1.0) * texelSize;\n	vUvUpLeft = uv + vec2(-1.0, 1.0) * texelSize;\n	vUvDownRight = uv + vec2(1.0, -1.0) * texelSize;\n\n}\n";


  var FXAAEffect = class extends Effect {
    /**
     * Constructs a new FXAA effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
     */
    constructor({ blendFunction = BlendFunction.SRC } = {}) {
      super("FXAAEffect", fxaa_default, {
        vertexShader: fxaa_default2,
        blendFunction,
        defines: /* @__PURE__ */ new Map([
          ["EDGE_THRESHOLD_MIN", "0.0312"],
          ["EDGE_THRESHOLD_MAX", "0.125"],
          ["SUBPIXEL_QUALITY", "0.75"],
          ["SAMPLES", "12"]
        ])
      });
    }
    /**
     * The minimum edge detection threshold. Range is [0.0, 1.0].
     *
     * @type {Number}
     */
    get minEdgeThreshold() {
      return Number(this.defines.get("EDGE_THRESHOLD_MIN"));
    }
    set minEdgeThreshold(value) {
      this.defines.set("EDGE_THRESHOLD_MIN", value.toFixed(12));
      this.setChanged();
    }
    /**
     * The maximum edge detection threshold. Range is [0.0, 1.0].
     *
     * @type {Number}
     */
    get maxEdgeThreshold() {
      return Number(this.defines.get("EDGE_THRESHOLD_MAX"));
    }
    set maxEdgeThreshold(value) {
      this.defines.set("EDGE_THRESHOLD_MAX", value.toFixed(12));
      this.setChanged();
    }
    /**
     * The subpixel blend quality. Range is [0.0, 1.0].
     *
     * @type {Number}
     */
    get subpixelQuality() {
      return Number(this.defines.get("SUBPIXEL_QUALITY"));
    }
    set subpixelQuality(value) {
      this.defines.set("SUBPIXEL_QUALITY", value.toFixed(12));
      this.setChanged();
    }
    /**
     * The maximum amount of edge detection samples.
     *
     * @type {Number}
     */
    get samples() {
      return Number(this.defines.get("SAMPLES"));
    }
    set samples(value) {
      this.defines.set("SAMPLES", value.toFixed(0));
      this.setChanged();
    }
  };


  var import_three52 = __require("three");


  var gamma_correction_default = "uniform float gamma;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	outputColor = LinearToGamma(max(inputColor, 0.0), gamma);\n\n}\n";


  var GammaCorrectionEffect = class extends Effect {
    /**
     * Constructs a new gamma correction effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
     * @param {Number} [options.gamma=2.0] - The gamma factor.
     */
    constructor({ blendFunction = BlendFunction.SRC, gamma = 2 } = {}) {
      super("GammaCorrectionEffect", gamma_correction_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["gamma", new import_three52.Uniform(gamma)]
        ])
      });
    }
  };


  var import_three56 = __require("three");


  var import_three53 = __require("three");


  function createCanvas(width, height, data) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    if (data instanceof Image) {
      context.drawImage(data, 0, 0);
    } else {
      const imageData = context.createImageData(width, height);
      imageData.data.set(data);
      context.putImageData(imageData, 0, 0);
    }
    return canvas;
  }
  var RawImageData = class _RawImageData {
    /**
     * Constructs a new image data container.
     *
     * @param {Number} [width=0] - The width of the image.
     * @param {Number} [height=0] - The height of the image.
     * @param {Uint8ClampedArray} [data=null] - The image data.
     */
    constructor(width = 0, height = 0, data = null) {
      this.width = width;
      this.height = height;
      this.data = data;
    }
    /**
     * Creates a canvas from this image data.
     *
     * @return {Canvas} The canvas, or null if it couldn't be created.
     */
    toCanvas() {
      return typeof document === "undefined" ? null : createCanvas(this.width, this.height, this.data);
    }
    /**
     * Creates a new image data container.
     *
     * @param {ImageData|Image} image - An image or plain image data.
     * @return {RawImageData} The image data.
     */
    static from(image) {
      const { width, height } = image;
      let data;
      if (image instanceof Image) {
        const canvas = createCanvas(width, height, image);
        if (canvas !== null) {
          const context = canvas.getContext("2d");
          data = context.getImageData(0, 0, width, height).data;
        }
      } else {
        data = image.data;
      }
      return new _RawImageData(width, height, data);
    }
  };





  var c = /* @__PURE__ */ new import_three53.Color();
  var LookupTexture = class _LookupTexture extends import_three53.Data3DTexture {
    /**
     * Constructs a cubic 3D lookup texture.
     *
     * @param {TypedArray} data - The pixel data. The default format is RGBA.
     * @param {Number} size - The sidelength.
     */
    constructor(data, size) {
      super(data, size, size, size);
      this.type = import_three53.FloatType;
      this.format = import_three53.RGBAFormat;
      this.minFilter = import_three53.LinearFilter;
      this.magFilter = import_three53.LinearFilter;
      this.wrapS = import_three53.ClampToEdgeWrapping;
      this.wrapT = import_three53.ClampToEdgeWrapping;
      this.wrapR = import_three53.ClampToEdgeWrapping;
      this.unpackAlignment = 1;
      this.needsUpdate = true;
      setTextureColorSpace(this, LinearSRGBColorSpace);
      this.domainMin = new import_three53.Vector3(0, 0, 0);
      this.domainMax = new import_three53.Vector3(1, 1, 1);
    }
    /**
     * Indicates that this is an instance of LookupTexture3D.
     *
     * @type {Boolean}
     * @deprecated
     */
    get isLookupTexture3D() {
      return true;
    }
    /**
     * Scales this LUT up to a given target size using tetrahedral interpolation.
     *
     * @param {Number} size - The target sidelength.
     * @param {Boolean} [transferData=true] - Extra fast mode. Set to false to keep the original data intact.
     * @return {Promise<LookupTexture>} A promise that resolves with a new LUT upon completion.
     */
    scaleUp(size, transferData = true) {
      const image = this.image;
      let promise;
      if (size <= image.width) {
        promise = Promise.reject(new Error("The target size must be greater than the current size"));
      } else {
        promise = new Promise((resolve, reject) => {
          const workerURL = URL.createObjectURL(new Blob([worker_default], {
            type: "text/javascript"
          }));
          const worker = new Worker(workerURL);
          worker.addEventListener("error", (event) => reject(event.error));
          worker.addEventListener("message", (event) => {
            const lut = new _LookupTexture(event.data, size);
            copyTextureColorSpace(this, lut);
            lut.type = this.type;
            lut.name = this.name;
            URL.revokeObjectURL(workerURL);
            resolve(lut);
          });
          const transferList = transferData ? [image.data.buffer] : [];
          worker.postMessage({
            operation: LUTOperation.SCALE_UP,
            data: image.data,
            size
          }, transferList);
        });
      }
      return promise;
    }
    /**
     * Applies the given LUT to this one.
     *
     * @param {LookupTexture} lut - A LUT. Must have the same dimensions, type and format as this LUT.
     * @return {LookupTexture} This texture.
     */
    applyLUT(lut) {
      const img0 = this.image;
      const img1 = lut.image;
      const size0 = Math.min(img0.width, img0.height, img0.depth);
      const size1 = Math.min(img1.width, img1.height, img1.depth);
      if (size0 !== size1) {
        console.error("Size mismatch");
      } else if (lut.type !== import_three53.FloatType || this.type !== import_three53.FloatType) {
        console.error("Both LUTs must be FloatType textures");
      } else if (lut.format !== import_three53.RGBAFormat || this.format !== import_three53.RGBAFormat) {
        console.error("Both LUTs must be RGBA textures");
      } else {
        const data0 = img0.data;
        const data1 = img1.data;
        const size = size0;
        const sizeSq = size ** 2;
        const s = size - 1;
        for (let i = 0, l = size ** 3; i < l; ++i) {
          const i4 = i * 4;
          const r = data0[i4 + 0] * s;
          const g = data0[i4 + 1] * s;
          const b = data0[i4 + 2] * s;
          const iRGB = Math.round(r + g * size + b * sizeSq) * 4;
          data0[i4 + 0] = data1[iRGB + 0];
          data0[i4 + 1] = data1[iRGB + 1];
          data0[i4 + 2] = data1[iRGB + 2];
        }
        this.needsUpdate = true;
      }
      return this;
    }
    /**
     * Converts the LUT data into unsigned byte data.
     *
     * This is a lossy operation which should only be performed after all other transformations have been applied.
     *
     * @return {LookupTexture} This texture.
     */
    convertToUint8() {
      if (this.type === import_three53.FloatType) {
        const floatData = this.image.data;
        const uint8Data = new Uint8Array(floatData.length);
        for (let i = 0, l = floatData.length; i < l; ++i) {
          uint8Data[i] = floatData[i] * 255 + 0.5;
        }
        this.image.data = uint8Data;
        this.type = import_three53.UnsignedByteType;
        this.needsUpdate = true;
      }
      return this;
    }
    /**
     * Converts the LUT data into float data.
     *
     * @return {LookupTexture} This texture.
     */
    convertToFloat() {
      if (this.type === import_three53.UnsignedByteType) {
        const uint8Data = this.image.data;
        const floatData = new Float32Array(uint8Data.length);
        for (let i = 0, l = uint8Data.length; i < l; ++i) {
          floatData[i] = uint8Data[i] / 255;
        }
        this.image.data = floatData;
        this.type = import_three53.FloatType;
        this.needsUpdate = true;
      }
      return this;
    }
    /**
     * Converts this LUT into RGBA data.
     *
     * @deprecated LUTs are RGBA by default since three r137.
     * @return {LookupTexture} This texture.
     */
    convertToRGBA() {
      console.warn("LookupTexture", "convertToRGBA() is deprecated, LUTs are now RGBA by default");
      return this;
    }
    /**
     * Converts the output of this LUT into sRGB color space.
     *
     * @return {LookupTexture} This texture.
     */
    convertLinearToSRGB() {
      const data = this.image.data;
      if (this.type === import_three53.FloatType) {
        for (let i = 0, l = data.length; i < l; i += 4) {
          c.fromArray(data, i).convertLinearToSRGB().toArray(data, i);
        }
        setTextureColorSpace(this, SRGBColorSpace);
        this.needsUpdate = true;
      } else {
        console.error("Color space conversion requires FloatType data");
      }
      return this;
    }
    /**
     * Converts the output of this LUT into linear color space.
     *
     * @return {LookupTexture} This texture.
     */
    convertSRGBToLinear() {
      const data = this.image.data;
      if (this.type === import_three53.FloatType) {
        for (let i = 0, l = data.length; i < l; i += 4) {
          c.fromArray(data, i).convertSRGBToLinear().toArray(data, i);
        }
        setTextureColorSpace(this, LinearSRGBColorSpace);
        this.needsUpdate = true;
      } else {
        console.error("Color space conversion requires FloatType data");
      }
      return this;
    }
    /**
     * Converts this LUT into a 2D data texture.
     *
     * Please note that custom input domains are not carried over to 2D textures.
     *
     * @return {DataTexture} The texture.
     */
    toDataTexture() {
      const width = this.image.width;
      const height = this.image.height * this.image.depth;
      const texture = new import_three53.DataTexture(this.image.data, width, height);
      texture.name = this.name;
      texture.type = this.type;
      texture.format = this.format;
      texture.minFilter = import_three53.LinearFilter;
      texture.magFilter = import_three53.LinearFilter;
      texture.wrapS = this.wrapS;
      texture.wrapT = this.wrapT;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;
      copyTextureColorSpace(this, texture);
      return texture;
    }
    /**
     * Creates a new 3D LUT by copying a given LUT.
     *
     * Common image-based textures will be converted into 3D data textures.
     *
     * @param {Texture} texture - The LUT. Assumed to be cubic.
     * @return {LookupTexture} A new 3D LUT.
     */
    static from(texture) {
      const image = texture.image;
      const { width, height } = image;
      const size = Math.min(width, height);
      let data;
      if (image instanceof Image) {
        const rawImageData = RawImageData.from(image);
        const src = rawImageData.data;
        if (width > height) {
          data = new Uint8Array(src.length);
          for (let z = 0; z < size; ++z) {
            for (let y = 0; y < size; ++y) {
              for (let x = 0; x < size; ++x) {
                const i4 = (x + z * size + y * size * size) * 4;
                const j4 = (x + y * size + z * size * size) * 4;
                data[j4 + 0] = src[i4 + 0];
                data[j4 + 1] = src[i4 + 1];
                data[j4 + 2] = src[i4 + 2];
                data[j4 + 3] = src[i4 + 3];
              }
            }
          }
        } else {
          data = new Uint8Array(src.buffer);
        }
      } else {
        data = image.data.slice();
      }
      const lut = new _LookupTexture(data, size);
      lut.type = texture.type;
      lut.name = texture.name;
      copyTextureColorSpace(texture, lut);
      return lut;
    }
    /**
     * Creates a neutral 3D LUT.
     *
     * @param {Number} size - The sidelength.
     * @return {LookupTexture} A neutral 3D LUT.
     */
    static createNeutral(size) {
      const data = new Float32Array(size ** 3 * 4);
      const sizeSq = size ** 2;
      const s = 1 / (size - 1);
      for (let r = 0; r < size; ++r) {
        for (let g = 0; g < size; ++g) {
          for (let b = 0; b < size; ++b) {
            const i4 = (r + g * size + b * sizeSq) * 4;
            data[i4 + 0] = r * s;
            data[i4 + 1] = g * s;
            data[i4 + 2] = b * s;
            data[i4 + 3] = 1;
          }
        }
      }
      const lut = new _LookupTexture(data, size);
      lut.name = "neutral";
      return lut;
    }
  };


  var P = [
    new Float32Array(3),
    new Float32Array(3)
  ];
  var C = [
    new Float32Array(3),
    new Float32Array(3),
    new Float32Array(3),
    new Float32Array(3)
  ];
  var T = [
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([1, 0, 0]),
      new Float32Array([1, 1, 0]),
      new Float32Array([1, 1, 1])
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([1, 0, 0]),
      new Float32Array([1, 0, 1]),
      new Float32Array([1, 1, 1])
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([0, 0, 1]),
      new Float32Array([1, 0, 1]),
      new Float32Array([1, 1, 1])
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([0, 1, 0]),
      new Float32Array([1, 1, 0]),
      new Float32Array([1, 1, 1])
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([0, 1, 0]),
      new Float32Array([0, 1, 1]),
      new Float32Array([1, 1, 1])
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([0, 0, 1]),
      new Float32Array([0, 1, 1]),
      new Float32Array([1, 1, 1])
    ]
  ];
  function calculateTetrahedronVolume(a, b, c2, d) {
    const bcX = c2[0] - b[0];
    const bcY = c2[1] - b[1];
    const bcZ = c2[2] - b[2];
    const baX = a[0] - b[0];
    const baY = a[1] - b[1];
    const baZ = a[2] - b[2];
    const crossX = bcY * baZ - bcZ * baY;
    const crossY = bcZ * baX - bcX * baZ;
    const crossZ = bcX * baY - bcY * baX;
    const length = Math.sqrt(crossX * crossX + crossY * crossY + crossZ * crossZ);
    const triangleArea = length * 0.5;
    const normalX = crossX / length;
    const normalY = crossY / length;
    const normalZ = crossZ / length;
    const constant = -(a[0] * normalX + a[1] * normalY + a[2] * normalZ);
    const dot = d[0] * normalX + d[1] * normalY + d[2] * normalZ;
    const height = Math.abs(dot + constant);
    return height * triangleArea / 3;
  }
  function sample(data, size, x, y, z, color2) {
    const i4 = (x + y * size + z * size * size) * 4;
    color2[0] = data[i4 + 0];
    color2[1] = data[i4 + 1];
    color2[2] = data[i4 + 2];
  }
  function tetrahedralSample(data, size, u, v3, w, color2) {
    const px = u * (size - 1);
    const py = v3 * (size - 1);
    const pz = w * (size - 1);
    const minX = Math.floor(px);
    const minY = Math.floor(py);
    const minZ = Math.floor(pz);
    const maxX = Math.ceil(px);
    const maxY = Math.ceil(py);
    const maxZ = Math.ceil(pz);
    const su = px - minX;
    const sv = py - minY;
    const sw = pz - minZ;
    if (minX === px && minY === py && minZ === pz) {
      sample(data, size, px, py, pz, color2);
    } else {
      let vertices;
      if (su >= sv && sv >= sw) {
        vertices = T[0];
      } else if (su >= sw && sw >= sv) {
        vertices = T[1];
      } else if (sw >= su && su >= sv) {
        vertices = T[2];
      } else if (sv >= su && su >= sw) {
        vertices = T[3];
      } else if (sv >= sw && sw >= su) {
        vertices = T[4];
      } else if (sw >= sv && sv >= su) {
        vertices = T[5];
      }
      const [P0, P1, P2, P3] = vertices;
      const coords = P[0];
      coords[0] = su;
      coords[1] = sv;
      coords[2] = sw;
      const tmp = P[1];
      const diffX = maxX - minX;
      const diffY = maxY - minY;
      const diffZ = maxZ - minZ;
      tmp[0] = diffX * P0[0] + minX;
      tmp[1] = diffY * P0[1] + minY;
      tmp[2] = diffZ * P0[2] + minZ;
      sample(data, size, tmp[0], tmp[1], tmp[2], C[0]);
      tmp[0] = diffX * P1[0] + minX;
      tmp[1] = diffY * P1[1] + minY;
      tmp[2] = diffZ * P1[2] + minZ;
      sample(data, size, tmp[0], tmp[1], tmp[2], C[1]);
      tmp[0] = diffX * P2[0] + minX;
      tmp[1] = diffY * P2[1] + minY;
      tmp[2] = diffZ * P2[2] + minZ;
      sample(data, size, tmp[0], tmp[1], tmp[2], C[2]);
      tmp[0] = diffX * P3[0] + minX;
      tmp[1] = diffY * P3[1] + minY;
      tmp[2] = diffZ * P3[2] + minZ;
      sample(data, size, tmp[0], tmp[1], tmp[2], C[3]);
      const V0 = calculateTetrahedronVolume(P1, P2, P3, coords) * 6;
      const V1 = calculateTetrahedronVolume(P0, P2, P3, coords) * 6;
      const V2 = calculateTetrahedronVolume(P0, P1, P3, coords) * 6;
      const V3 = calculateTetrahedronVolume(P0, P1, P2, coords) * 6;
      C[0][0] *= V0;
      C[0][1] *= V0;
      C[0][2] *= V0;
      C[1][0] *= V1;
      C[1][1] *= V1;
      C[1][2] *= V1;
      C[2][0] *= V2;
      C[2][1] *= V2;
      C[2][2] *= V2;
      C[3][0] *= V3;
      C[3][1] *= V3;
      C[3][2] *= V3;
      color2[0] = C[0][0] + C[1][0] + C[2][0] + C[3][0];
      color2[1] = C[0][1] + C[1][1] + C[2][1] + C[3][1];
      color2[2] = C[0][2] + C[1][2] + C[2][2] + C[3][2];
    }
  }
  var TetrahedralUpscaler = class {
    /**
     * Expands the given data to the target size.
     *
     * @param {TypedArray} data - The input RGBA data. Assumed to be cubic.
     * @param {Number} size - The target size.
     * @return {TypedArray} The new data.
     */
    static expand(data, size) {
      const originalSize = Math.cbrt(data.length / 4);
      const rgb = new Float32Array(3);
      const array = new data.constructor(size ** 3 * 4);
      const maxValue = data instanceof Uint8Array ? 255 : 1;
      const sizeSq = size ** 2;
      const s = 1 / (size - 1);
      for (let z = 0; z < size; ++z) {
        for (let y = 0; y < size; ++y) {
          for (let x = 0; x < size; ++x) {
            const u = x * s;
            const v3 = y * s;
            const w = z * s;
            const i4 = Math.round(x + y * size + z * sizeSq) * 4;
            tetrahedralSample(data, originalSize, u, v3, w, rgb);
            array[i4 + 0] = rgb[0];
            array[i4 + 1] = rgb[1];
            array[i4 + 2] = rgb[2];
            array[i4 + 3] = maxValue;
          }
        }
      }
      return array;
    }
  };


  var area = [
    new Float32Array(2),
    new Float32Array(2)
  ];
  var ORTHOGONAL_SIZE = 16;
  var DIAGONAL_SIZE = 20;
  var DIAGONAL_SAMPLES = 30;
  var SMOOTH_MAX_DISTANCE = 32;
  var orthogonalSubsamplingOffsets = new Float32Array([
    0,
    -0.25,
    0.25,
    -0.125,
    0.125,
    -0.375,
    0.375
  ]);
  var diagonalSubsamplingOffsets = [
    new Float32Array([0, 0]),
    new Float32Array([0.25, -0.25]),
    new Float32Array([-0.25, 0.25]),
    new Float32Array([0.125, -0.125]),
    new Float32Array([-0.125, 0.125])
  ];
  var orthogonalEdges = [
    new Uint8Array([0, 0]),
    new Uint8Array([3, 0]),
    new Uint8Array([0, 3]),
    new Uint8Array([3, 3]),
    new Uint8Array([1, 0]),
    new Uint8Array([4, 0]),
    new Uint8Array([1, 3]),
    new Uint8Array([4, 3]),
    new Uint8Array([0, 1]),
    new Uint8Array([3, 1]),
    new Uint8Array([0, 4]),
    new Uint8Array([3, 4]),
    new Uint8Array([1, 1]),
    new Uint8Array([4, 1]),
    new Uint8Array([1, 4]),
    new Uint8Array([4, 4])
  ];
  var diagonalEdges = [
    new Uint8Array([0, 0]),
    new Uint8Array([1, 0]),
    new Uint8Array([0, 2]),
    new Uint8Array([1, 2]),
    new Uint8Array([2, 0]),
    new Uint8Array([3, 0]),
    new Uint8Array([2, 2]),
    new Uint8Array([3, 2]),
    new Uint8Array([0, 1]),
    new Uint8Array([1, 1]),
    new Uint8Array([0, 3]),
    new Uint8Array([1, 3]),
    new Uint8Array([2, 1]),
    new Uint8Array([3, 1]),
    new Uint8Array([2, 3]),
    new Uint8Array([3, 3])
  ];
  function lerp(a, b, p) {
    return a + (b - a) * p;
  }
  function saturate(a) {
    return Math.min(Math.max(a, 0), 1);
  }
  function smoothArea(d) {
    const a1 = area[0];
    const a2 = area[1];
    const b1X = Math.sqrt(a1[0] * 2) * 0.5;
    const b1Y = Math.sqrt(a1[1] * 2) * 0.5;
    const b2X = Math.sqrt(a2[0] * 2) * 0.5;
    const b2Y = Math.sqrt(a2[1] * 2) * 0.5;
    const p = saturate(d / SMOOTH_MAX_DISTANCE);
    a1[0] = lerp(b1X, a1[0], p);
    a1[1] = lerp(b1Y, a1[1], p);
    a2[0] = lerp(b2X, a2[0], p);
    a2[1] = lerp(b2Y, a2[1], p);
  }
  function getOrthArea(p1X, p1Y, p2X, p2Y, x, result) {
    const dX = p2X - p1X;
    const dY = p2Y - p1Y;
    const x1 = x;
    const x2 = x + 1;
    const y1 = p1Y + dY * (x1 - p1X) / dX;
    const y2 = p1Y + dY * (x2 - p1X) / dX;
    if (x1 >= p1X && x1 < p2X || x2 > p1X && x2 <= p2X) {
      if (Math.sign(y1) === Math.sign(y2) || Math.abs(y1) < 1e-4 || Math.abs(y2) < 1e-4) {
        const a = (y1 + y2) / 2;
        if (a < 0) {
          result[0] = Math.abs(a);
          result[1] = 0;
        } else {
          result[0] = 0;
          result[1] = Math.abs(a);
        }
      } else {
        const t = -p1Y * dX / dY + p1X;
        const tInt = Math.trunc(t);
        const a1 = t > p1X ? y1 * (t - tInt) / 2 : 0;
        const a2 = t < p2X ? y2 * (1 - (t - tInt)) / 2 : 0;
        const a = Math.abs(a1) > Math.abs(a2) ? a1 : -a2;
        if (a < 0) {
          result[0] = Math.abs(a1);
          result[1] = Math.abs(a2);
        } else {
          result[0] = Math.abs(a2);
          result[1] = Math.abs(a1);
        }
      }
    } else {
      result[0] = 0;
      result[1] = 0;
    }
    return result;
  }
  function getOrthAreaForPattern(pattern, left, right, offset, result) {
    const a1 = area[0];
    const a2 = area[1];
    const o1 = 0.5 + offset;
    const o2 = 0.5 + offset - 1;
    const d = left + right + 1;
    switch (pattern) {
      case 0: {
        result[0] = 0;
        result[1] = 0;
        break;
      }
      case 1: {
        if (left <= right) {
          getOrthArea(0, o2, d / 2, 0, left, result);
        } else {
          result[0] = 0;
          result[1] = 0;
        }
        break;
      }
      case 2: {
        if (left >= right) {
          getOrthArea(d / 2, 0, d, o2, left, result);
        } else {
          result[0] = 0;
          result[1] = 0;
        }
        break;
      }
      case 3: {
        getOrthArea(0, o2, d / 2, 0, left, a1);
        getOrthArea(d / 2, 0, d, o2, left, a2);
        smoothArea(d, area);
        result[0] = a1[0] + a2[0];
        result[1] = a1[1] + a2[1];
        break;
      }
      case 4: {
        if (left <= right) {
          getOrthArea(0, o1, d / 2, 0, left, result);
        } else {
          result[0] = 0;
          result[1] = 0;
        }
        break;
      }
      case 5: {
        result[0] = 0;
        result[1] = 0;
        break;
      }
      case 6: {
        if (Math.abs(offset) > 0) {
          getOrthArea(0, o1, d, o2, left, a1);
          getOrthArea(0, o1, d / 2, 0, left, a2);
          getOrthArea(d / 2, 0, d, o2, left, result);
          a2[0] = a2[0] + result[0];
          a2[1] = a2[1] + result[1];
          result[0] = (a1[0] + a2[0]) / 2;
          result[1] = (a1[1] + a2[1]) / 2;
        } else {
          getOrthArea(0, o1, d, o2, left, result);
        }
        break;
      }
      case 7: {
        getOrthArea(0, o1, d, o2, left, result);
        break;
      }
      case 8: {
        if (left >= right) {
          getOrthArea(d / 2, 0, d, o1, left, result);
        } else {
          result[0] = 0;
          result[1] = 0;
        }
        break;
      }
      case 9: {
        if (Math.abs(offset) > 0) {
          getOrthArea(0, o2, d, o1, left, a1);
          getOrthArea(0, o2, d / 2, 0, left, a2);
          getOrthArea(d / 2, 0, d, o1, left, result);
          a2[0] = a2[0] + result[0];
          a2[1] = a2[1] + result[1];
          result[0] = (a1[0] + a2[0]) / 2;
          result[1] = (a1[1] + a2[1]) / 2;
        } else {
          getOrthArea(0, o2, d, o1, left, result);
        }
        break;
      }
      case 10: {
        result[0] = 0;
        result[1] = 0;
        break;
      }
      case 11: {
        getOrthArea(0, o2, d, o1, left, result);
        break;
      }
      case 12: {
        getOrthArea(0, o1, d / 2, 0, left, a1);
        getOrthArea(d / 2, 0, d, o1, left, a2);
        smoothArea(d, area);
        result[0] = a1[0] + a2[0];
        result[1] = a1[1] + a2[1];
        break;
      }
      case 13: {
        getOrthArea(0, o2, d, o1, left, result);
        break;
      }
      case 14: {
        getOrthArea(0, o1, d, o2, left, result);
        break;
      }
      case 15: {
        result[0] = 0;
        result[1] = 0;
        break;
      }
    }
    return result;
  }
  function isInsideArea(a1X, a1Y, a2X, a2Y, x, y) {
    let result = a1X === a2X && a1Y === a2Y;
    if (!result) {
      const xm = (a1X + a2X) / 2;
      const ym = (a1Y + a2Y) / 2;
      const a = a2Y - a1Y;
      const b = a1X - a2X;
      const c2 = a * (x - xm) + b * (y - ym);
      result = c2 > 0;
    }
    return result;
  }
  function getDiagAreaForPixel(a1X, a1Y, a2X, a2Y, pX, pY) {
    let n = 0;
    for (let y = 0; y < DIAGONAL_SAMPLES; ++y) {
      for (let x = 0; x < DIAGONAL_SAMPLES; ++x) {
        const offsetX = x / (DIAGONAL_SAMPLES - 1);
        const offsetY = y / (DIAGONAL_SAMPLES - 1);
        if (isInsideArea(a1X, a1Y, a2X, a2Y, pX + offsetX, pY + offsetY)) {
          ++n;
        }
      }
    }
    return n / (DIAGONAL_SAMPLES * DIAGONAL_SAMPLES);
  }
  function getDiagArea(pattern, a1X, a1Y, a2X, a2Y, left, offset, result) {
    const e = diagonalEdges[pattern];
    const e1 = e[0];
    const e2 = e[1];
    if (e1 > 0) {
      a1X += offset[0];
      a1Y += offset[1];
    }
    if (e2 > 0) {
      a2X += offset[0];
      a2Y += offset[1];
    }
    result[0] = 1 - getDiagAreaForPixel(a1X, a1Y, a2X, a2Y, 1 + left, 0 + left);
    result[1] = getDiagAreaForPixel(a1X, a1Y, a2X, a2Y, 1 + left, 1 + left);
    return result;
  }
  function getDiagAreaForPattern(pattern, left, right, offset, result) {
    const a1 = area[0];
    const a2 = area[1];
    const d = left + right + 1;
    switch (pattern) {
      case 0: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 1: {
        getDiagArea(pattern, 1, 0, 0 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 2: {
        getDiagArea(pattern, 0, 0, 1 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 3: {
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, result);
        break;
      }
      case 4: {
        getDiagArea(pattern, 1, 1, 0 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 1, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 5: {
        getDiagArea(pattern, 1, 1, 0 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 6: {
        getDiagArea(pattern, 1, 1, 1 + d, 0 + d, left, offset, result);
        break;
      }
      case 7: {
        getDiagArea(pattern, 1, 1, 1 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 8: {
        getDiagArea(pattern, 0, 0, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 9: {
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, result);
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, result);
        break;
      }
      case 10: {
        getDiagArea(pattern, 0, 0, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 11: {
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 12: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, result);
        break;
      }
      case 13: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 14: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 1, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 15: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
    }
    return result;
  }
  function generatePatterns(patterns, offset, orthogonal) {
    const result = new Float32Array(2);
    for (let i = 0, l = patterns.length; i < l; ++i) {
      const pattern = patterns[i];
      const data = pattern.data;
      const size = pattern.width;
      for (let y = 0; y < size; ++y) {
        for (let x = 0; x < size; ++x) {
          if (orthogonal) {
            getOrthAreaForPattern(i, x, y, offset, result);
          } else {
            getDiagAreaForPattern(i, x, y, offset, result);
          }
          const c2 = (y * size + x) * 2;
          data[c2] = result[0] * 255;
          data[c2 + 1] = result[1] * 255;
        }
      }
    }
  }
  function assemble(baseX, baseY, patterns, edges2, size, orthogonal, target) {
    const dstData = target.data;
    const dstWidth = target.width;
    for (let i = 0, l = patterns.length; i < l; ++i) {
      const edge = edges2[i];
      const pattern = patterns[i];
      const srcData = pattern.data;
      const srcWidth = pattern.width;
      for (let y = 0; y < size; ++y) {
        for (let x = 0; x < size; ++x) {
          const pX = edge[0] * size + baseX + x;
          const pY = edge[1] * size + baseY + y;
          const c2 = (pY * dstWidth + pX) * 4;
          const d = orthogonal ? (y * y * srcWidth + x * x) * 2 : (y * srcWidth + x) * 2;
          dstData[c2] = srcData[d];
          dstData[c2 + 1] = srcData[d + 1];
          dstData[c2 + 2] = 0;
          dstData[c2 + 3] = 255;
        }
      }
    }
  }
  var SMAAAreaImageData = class {
    /**
     * Creates a new area image.
     *
     * @return {RawImageData} The generated image data.
     */
    static generate() {
      const width = 2 * 5 * ORTHOGONAL_SIZE;
      const height = orthogonalSubsamplingOffsets.length * 5 * ORTHOGONAL_SIZE;
      const data = new Uint8ClampedArray(width * height * 4);
      const result = new RawImageData(width, height, data);
      const orthPatternSize = Math.pow(ORTHOGONAL_SIZE - 1, 2) + 1;
      const diagPatternSize = DIAGONAL_SIZE;
      const orthogonalPatterns = [];
      const diagonalPatterns = [];
      for (let i = 3, l = data.length; i < l; i += 4) {
        data[i] = 255;
      }
      for (let i = 0; i < 16; ++i) {
        orthogonalPatterns.push(new RawImageData(
          orthPatternSize,
          orthPatternSize,
          new Uint8ClampedArray(orthPatternSize * orthPatternSize * 2),
          2
        ));
        diagonalPatterns.push(new RawImageData(
          diagPatternSize,
          diagPatternSize,
          new Uint8ClampedArray(diagPatternSize * diagPatternSize * 2),
          2
        ));
      }
      for (let i = 0, l = orthogonalSubsamplingOffsets.length; i < l; ++i) {
        generatePatterns(orthogonalPatterns, orthogonalSubsamplingOffsets[i], true);
        assemble(
          0,
          5 * ORTHOGONAL_SIZE * i,
          orthogonalPatterns,
          orthogonalEdges,
          ORTHOGONAL_SIZE,
          true,
          result
        );
      }
      for (let i = 0, l = diagonalSubsamplingOffsets.length; i < l; ++i) {
        generatePatterns(diagonalPatterns, diagonalSubsamplingOffsets[i], false);
        assemble(
          5 * ORTHOGONAL_SIZE,
          4 * DIAGONAL_SIZE * i,
          diagonalPatterns,
          diagonalEdges,
          DIAGONAL_SIZE,
          false,
          result
        );
      }
      return result;
    }
  };


  var import_three54 = __require("three");


  var worker_default2 = `"use strict";
(() => {

  function createCanvas(width, height, data) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    if (data instanceof Image) {
      context.drawImage(data, 0, 0);
    } else {
      const imageData = context.createImageData(width, height);
      imageData.data.set(data);
      context.putImageData(imageData, 0, 0);
    }
    return canvas;
  }
  var RawImageData = class _RawImageData {
    /**
     * Constructs a new image data container.
     *
     * @param {Number} [width=0] - The width of the image.
     * @param {Number} [height=0] - The height of the image.
     * @param {Uint8ClampedArray} [data=null] - The image data.
     */
    constructor(width = 0, height = 0, data = null) {
      this.width = width;
      this.height = height;
      this.data = data;
    }
    /**
     * Creates a canvas from this image data.
     *
     * @return {Canvas} The canvas, or null if it couldn't be created.
     */
    toCanvas() {
      return typeof document === "undefined" ? null : createCanvas(this.width, this.height, this.data);
    }
    /**
     * Creates a new image data container.
     *
     * @param {ImageData|Image} image - An image or plain image data.
     * @return {RawImageData} The image data.
     */
    static from(image) {
      const { width, height } = image;
      let data;
      if (image instanceof Image) {
        const canvas = createCanvas(width, height, image);
        if (canvas !== null) {
          const context = canvas.getContext("2d");
          data = context.getImageData(0, 0, width, height).data;
        }
      } else {
        data = image.data;
      }
      return new _RawImageData(width, height, data);
    }
  };


  var area = [
    new Float32Array(2),
    new Float32Array(2)
  ];
  var ORTHOGONAL_SIZE = 16;
  var DIAGONAL_SIZE = 20;
  var DIAGONAL_SAMPLES = 30;
  var SMOOTH_MAX_DISTANCE = 32;
  var orthogonalSubsamplingOffsets = new Float32Array([
    0,
    -0.25,
    0.25,
    -0.125,
    0.125,
    -0.375,
    0.375
  ]);
  var diagonalSubsamplingOffsets = [
    new Float32Array([0, 0]),
    new Float32Array([0.25, -0.25]),
    new Float32Array([-0.25, 0.25]),
    new Float32Array([0.125, -0.125]),
    new Float32Array([-0.125, 0.125])
  ];
  var orthogonalEdges = [
    new Uint8Array([0, 0]),
    new Uint8Array([3, 0]),
    new Uint8Array([0, 3]),
    new Uint8Array([3, 3]),
    new Uint8Array([1, 0]),
    new Uint8Array([4, 0]),
    new Uint8Array([1, 3]),
    new Uint8Array([4, 3]),
    new Uint8Array([0, 1]),
    new Uint8Array([3, 1]),
    new Uint8Array([0, 4]),
    new Uint8Array([3, 4]),
    new Uint8Array([1, 1]),
    new Uint8Array([4, 1]),
    new Uint8Array([1, 4]),
    new Uint8Array([4, 4])
  ];
  var diagonalEdges = [
    new Uint8Array([0, 0]),
    new Uint8Array([1, 0]),
    new Uint8Array([0, 2]),
    new Uint8Array([1, 2]),
    new Uint8Array([2, 0]),
    new Uint8Array([3, 0]),
    new Uint8Array([2, 2]),
    new Uint8Array([3, 2]),
    new Uint8Array([0, 1]),
    new Uint8Array([1, 1]),
    new Uint8Array([0, 3]),
    new Uint8Array([1, 3]),
    new Uint8Array([2, 1]),
    new Uint8Array([3, 1]),
    new Uint8Array([2, 3]),
    new Uint8Array([3, 3])
  ];
  function lerp(a, b, p) {
    return a + (b - a) * p;
  }
  function saturate(a) {
    return Math.min(Math.max(a, 0), 1);
  }
  function smoothArea(d) {
    const a1 = area[0];
    const a2 = area[1];
    const b1X = Math.sqrt(a1[0] * 2) * 0.5;
    const b1Y = Math.sqrt(a1[1] * 2) * 0.5;
    const b2X = Math.sqrt(a2[0] * 2) * 0.5;
    const b2Y = Math.sqrt(a2[1] * 2) * 0.5;
    const p = saturate(d / SMOOTH_MAX_DISTANCE);
    a1[0] = lerp(b1X, a1[0], p);
    a1[1] = lerp(b1Y, a1[1], p);
    a2[0] = lerp(b2X, a2[0], p);
    a2[1] = lerp(b2Y, a2[1], p);
  }
  function getOrthArea(p1X, p1Y, p2X, p2Y, x, result) {
    const dX = p2X - p1X;
    const dY = p2Y - p1Y;
    const x1 = x;
    const x2 = x + 1;
    const y1 = p1Y + dY * (x1 - p1X) / dX;
    const y2 = p1Y + dY * (x2 - p1X) / dX;
    if (x1 >= p1X && x1 < p2X || x2 > p1X && x2 <= p2X) {
      if (Math.sign(y1) === Math.sign(y2) || Math.abs(y1) < 1e-4 || Math.abs(y2) < 1e-4) {
        const a = (y1 + y2) / 2;
        if (a < 0) {
          result[0] = Math.abs(a);
          result[1] = 0;
        } else {
          result[0] = 0;
          result[1] = Math.abs(a);
        }
      } else {
        const t = -p1Y * dX / dY + p1X;
        const tInt = Math.trunc(t);
        const a1 = t > p1X ? y1 * (t - tInt) / 2 : 0;
        const a2 = t < p2X ? y2 * (1 - (t - tInt)) / 2 : 0;
        const a = Math.abs(a1) > Math.abs(a2) ? a1 : -a2;
        if (a < 0) {
          result[0] = Math.abs(a1);
          result[1] = Math.abs(a2);
        } else {
          result[0] = Math.abs(a2);
          result[1] = Math.abs(a1);
        }
      }
    } else {
      result[0] = 0;
      result[1] = 0;
    }
    return result;
  }
  function getOrthAreaForPattern(pattern, left, right, offset, result) {
    const a1 = area[0];
    const a2 = area[1];
    const o1 = 0.5 + offset;
    const o2 = 0.5 + offset - 1;
    const d = left + right + 1;
    switch (pattern) {
      case 0: {
        result[0] = 0;
        result[1] = 0;
        break;
      }
      case 1: {
        if (left <= right) {
          getOrthArea(0, o2, d / 2, 0, left, result);
        } else {
          result[0] = 0;
          result[1] = 0;
        }
        break;
      }
      case 2: {
        if (left >= right) {
          getOrthArea(d / 2, 0, d, o2, left, result);
        } else {
          result[0] = 0;
          result[1] = 0;
        }
        break;
      }
      case 3: {
        getOrthArea(0, o2, d / 2, 0, left, a1);
        getOrthArea(d / 2, 0, d, o2, left, a2);
        smoothArea(d, area);
        result[0] = a1[0] + a2[0];
        result[1] = a1[1] + a2[1];
        break;
      }
      case 4: {
        if (left <= right) {
          getOrthArea(0, o1, d / 2, 0, left, result);
        } else {
          result[0] = 0;
          result[1] = 0;
        }
        break;
      }
      case 5: {
        result[0] = 0;
        result[1] = 0;
        break;
      }
      case 6: {
        if (Math.abs(offset) > 0) {
          getOrthArea(0, o1, d, o2, left, a1);
          getOrthArea(0, o1, d / 2, 0, left, a2);
          getOrthArea(d / 2, 0, d, o2, left, result);
          a2[0] = a2[0] + result[0];
          a2[1] = a2[1] + result[1];
          result[0] = (a1[0] + a2[0]) / 2;
          result[1] = (a1[1] + a2[1]) / 2;
        } else {
          getOrthArea(0, o1, d, o2, left, result);
        }
        break;
      }
      case 7: {
        getOrthArea(0, o1, d, o2, left, result);
        break;
      }
      case 8: {
        if (left >= right) {
          getOrthArea(d / 2, 0, d, o1, left, result);
        } else {
          result[0] = 0;
          result[1] = 0;
        }
        break;
      }
      case 9: {
        if (Math.abs(offset) > 0) {
          getOrthArea(0, o2, d, o1, left, a1);
          getOrthArea(0, o2, d / 2, 0, left, a2);
          getOrthArea(d / 2, 0, d, o1, left, result);
          a2[0] = a2[0] + result[0];
          a2[1] = a2[1] + result[1];
          result[0] = (a1[0] + a2[0]) / 2;
          result[1] = (a1[1] + a2[1]) / 2;
        } else {
          getOrthArea(0, o2, d, o1, left, result);
        }
        break;
      }
      case 10: {
        result[0] = 0;
        result[1] = 0;
        break;
      }
      case 11: {
        getOrthArea(0, o2, d, o1, left, result);
        break;
      }
      case 12: {
        getOrthArea(0, o1, d / 2, 0, left, a1);
        getOrthArea(d / 2, 0, d, o1, left, a2);
        smoothArea(d, area);
        result[0] = a1[0] + a2[0];
        result[1] = a1[1] + a2[1];
        break;
      }
      case 13: {
        getOrthArea(0, o2, d, o1, left, result);
        break;
      }
      case 14: {
        getOrthArea(0, o1, d, o2, left, result);
        break;
      }
      case 15: {
        result[0] = 0;
        result[1] = 0;
        break;
      }
    }
    return result;
  }
  function isInsideArea(a1X, a1Y, a2X, a2Y, x, y) {
    let result = a1X === a2X && a1Y === a2Y;
    if (!result) {
      const xm = (a1X + a2X) / 2;
      const ym = (a1Y + a2Y) / 2;
      const a = a2Y - a1Y;
      const b = a1X - a2X;
      const c = a * (x - xm) + b * (y - ym);
      result = c > 0;
    }
    return result;
  }
  function getDiagAreaForPixel(a1X, a1Y, a2X, a2Y, pX, pY) {
    let n = 0;
    for (let y = 0; y < DIAGONAL_SAMPLES; ++y) {
      for (let x = 0; x < DIAGONAL_SAMPLES; ++x) {
        const offsetX = x / (DIAGONAL_SAMPLES - 1);
        const offsetY = y / (DIAGONAL_SAMPLES - 1);
        if (isInsideArea(a1X, a1Y, a2X, a2Y, pX + offsetX, pY + offsetY)) {
          ++n;
        }
      }
    }
    return n / (DIAGONAL_SAMPLES * DIAGONAL_SAMPLES);
  }
  function getDiagArea(pattern, a1X, a1Y, a2X, a2Y, left, offset, result) {
    const e = diagonalEdges[pattern];
    const e1 = e[0];
    const e2 = e[1];
    if (e1 > 0) {
      a1X += offset[0];
      a1Y += offset[1];
    }
    if (e2 > 0) {
      a2X += offset[0];
      a2Y += offset[1];
    }
    result[0] = 1 - getDiagAreaForPixel(a1X, a1Y, a2X, a2Y, 1 + left, 0 + left);
    result[1] = getDiagAreaForPixel(a1X, a1Y, a2X, a2Y, 1 + left, 1 + left);
    return result;
  }
  function getDiagAreaForPattern(pattern, left, right, offset, result) {
    const a1 = area[0];
    const a2 = area[1];
    const d = left + right + 1;
    switch (pattern) {
      case 0: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 1: {
        getDiagArea(pattern, 1, 0, 0 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 2: {
        getDiagArea(pattern, 0, 0, 1 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 3: {
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, result);
        break;
      }
      case 4: {
        getDiagArea(pattern, 1, 1, 0 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 1, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 5: {
        getDiagArea(pattern, 1, 1, 0 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 6: {
        getDiagArea(pattern, 1, 1, 1 + d, 0 + d, left, offset, result);
        break;
      }
      case 7: {
        getDiagArea(pattern, 1, 1, 1 + d, 0 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 8: {
        getDiagArea(pattern, 0, 0, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 9: {
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, result);
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, result);
        break;
      }
      case 10: {
        getDiagArea(pattern, 0, 0, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 11: {
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 12: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, result);
        break;
      }
      case 13: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 1 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 14: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 1, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
      case 15: {
        getDiagArea(pattern, 1, 1, 1 + d, 1 + d, left, offset, a1);
        getDiagArea(pattern, 1, 0, 1 + d, 0 + d, left, offset, a2);
        result[0] = (a1[0] + a2[0]) / 2;
        result[1] = (a1[1] + a2[1]) / 2;
        break;
      }
    }
    return result;
  }
  function generatePatterns(patterns, offset, orthogonal) {
    const result = new Float32Array(2);
    for (let i = 0, l = patterns.length; i < l; ++i) {
      const pattern = patterns[i];
      const data = pattern.data;
      const size = pattern.width;
      for (let y = 0; y < size; ++y) {
        for (let x = 0; x < size; ++x) {
          if (orthogonal) {
            getOrthAreaForPattern(i, x, y, offset, result);
          } else {
            getDiagAreaForPattern(i, x, y, offset, result);
          }
          const c = (y * size + x) * 2;
          data[c] = result[0] * 255;
          data[c + 1] = result[1] * 255;
        }
      }
    }
  }
  function assemble(baseX, baseY, patterns, edges2, size, orthogonal, target) {
    const dstData = target.data;
    const dstWidth = target.width;
    for (let i = 0, l = patterns.length; i < l; ++i) {
      const edge = edges2[i];
      const pattern = patterns[i];
      const srcData = pattern.data;
      const srcWidth = pattern.width;
      for (let y = 0; y < size; ++y) {
        for (let x = 0; x < size; ++x) {
          const pX = edge[0] * size + baseX + x;
          const pY = edge[1] * size + baseY + y;
          const c = (pY * dstWidth + pX) * 4;
          const d = orthogonal ? (y * y * srcWidth + x * x) * 2 : (y * srcWidth + x) * 2;
          dstData[c] = srcData[d];
          dstData[c + 1] = srcData[d + 1];
          dstData[c + 2] = 0;
          dstData[c + 3] = 255;
        }
      }
    }
  }
  var SMAAAreaImageData = class {
    /**
     * Creates a new area image.
     *
     * @return {RawImageData} The generated image data.
     */
    static generate() {
      const width = 2 * 5 * ORTHOGONAL_SIZE;
      const height = orthogonalSubsamplingOffsets.length * 5 * ORTHOGONAL_SIZE;
      const data = new Uint8ClampedArray(width * height * 4);
      const result = new RawImageData(width, height, data);
      const orthPatternSize = Math.pow(ORTHOGONAL_SIZE - 1, 2) + 1;
      const diagPatternSize = DIAGONAL_SIZE;
      const orthogonalPatterns = [];
      const diagonalPatterns = [];
      for (let i = 3, l = data.length; i < l; i += 4) {
        data[i] = 255;
      }
      for (let i = 0; i < 16; ++i) {
        orthogonalPatterns.push(new RawImageData(
          orthPatternSize,
          orthPatternSize,
          new Uint8ClampedArray(orthPatternSize * orthPatternSize * 2),
          2
        ));
        diagonalPatterns.push(new RawImageData(
          diagPatternSize,
          diagPatternSize,
          new Uint8ClampedArray(diagPatternSize * diagPatternSize * 2),
          2
        ));
      }
      for (let i = 0, l = orthogonalSubsamplingOffsets.length; i < l; ++i) {
        generatePatterns(orthogonalPatterns, orthogonalSubsamplingOffsets[i], true);
        assemble(
          0,
          5 * ORTHOGONAL_SIZE * i,
          orthogonalPatterns,
          orthogonalEdges,
          ORTHOGONAL_SIZE,
          true,
          result
        );
      }
      for (let i = 0, l = diagonalSubsamplingOffsets.length; i < l; ++i) {
        generatePatterns(diagonalPatterns, diagonalSubsamplingOffsets[i], false);
        assemble(
          5 * ORTHOGONAL_SIZE,
          4 * DIAGONAL_SIZE * i,
          diagonalPatterns,
          diagonalEdges,
          DIAGONAL_SIZE,
          false,
          result
        );
      }
      return result;
    }
  };


  var edges = /* @__PURE__ */ new Map([
    [bilinear(0, 0, 0, 0), new Float32Array([0, 0, 0, 0])],
    [bilinear(0, 0, 0, 1), new Float32Array([0, 0, 0, 1])],
    [bilinear(0, 0, 1, 0), new Float32Array([0, 0, 1, 0])],
    [bilinear(0, 0, 1, 1), new Float32Array([0, 0, 1, 1])],
    [bilinear(0, 1, 0, 0), new Float32Array([0, 1, 0, 0])],
    [bilinear(0, 1, 0, 1), new Float32Array([0, 1, 0, 1])],
    [bilinear(0, 1, 1, 0), new Float32Array([0, 1, 1, 0])],
    [bilinear(0, 1, 1, 1), new Float32Array([0, 1, 1, 1])],
    [bilinear(1, 0, 0, 0), new Float32Array([1, 0, 0, 0])],
    [bilinear(1, 0, 0, 1), new Float32Array([1, 0, 0, 1])],
    [bilinear(1, 0, 1, 0), new Float32Array([1, 0, 1, 0])],
    [bilinear(1, 0, 1, 1), new Float32Array([1, 0, 1, 1])],
    [bilinear(1, 1, 0, 0), new Float32Array([1, 1, 0, 0])],
    [bilinear(1, 1, 0, 1), new Float32Array([1, 1, 0, 1])],
    [bilinear(1, 1, 1, 0), new Float32Array([1, 1, 1, 0])],
    [bilinear(1, 1, 1, 1), new Float32Array([1, 1, 1, 1])]
  ]);
  function lerp2(a, b, p) {
    return a + (b - a) * p;
  }
  function bilinear(e0, e1, e2, e3) {
    const a = lerp2(e0, e1, 1 - 0.25);
    const b = lerp2(e2, e3, 1 - 0.25);
    return lerp2(a, b, 1 - 0.125);
  }
  function deltaLeft(left, top) {
    let d = 0;
    if (top[3] === 1) {
      d += 1;
    }
    if (d === 1 && top[2] === 1 && left[1] !== 1 && left[3] !== 1) {
      d += 1;
    }
    return d;
  }
  function deltaRight(left, top) {
    let d = 0;
    if (top[3] === 1 && left[1] !== 1 && left[3] !== 1) {
      d += 1;
    }
    if (d === 1 && top[2] === 1 && left[0] !== 1 && left[2] !== 1) {
      d += 1;
    }
    return d;
  }
  var SMAASearchImageData = class {
    /**
     * Creates a new search image.
     *
     * @return {RawImageData} The generated image data.
     */
    static generate() {
      const width = 66;
      const height = 33;
      const halfWidth = width / 2;
      const croppedWidth = 64;
      const croppedHeight = 16;
      const data = new Uint8ClampedArray(width * height);
      const croppedData = new Uint8ClampedArray(croppedWidth * croppedHeight * 4);
      for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
          const s = 0.03125 * x;
          const t = 0.03125 * y;
          if (edges.has(s) && edges.has(t)) {
            const e1 = edges.get(s);
            const e2 = edges.get(t);
            const i = y * width + x;
            data[i] = 127 * deltaLeft(e1, e2);
            data[i + halfWidth] = 127 * deltaRight(e1, e2);
          }
        }
      }
      for (let i = 0, y = height - croppedHeight; y < height; ++y) {
        for (let x = 0; x < croppedWidth; ++x, i += 4) {
          croppedData[i] = data[y * width + x];
          croppedData[i + 3] = 255;
        }
      }
      return new RawImageData(croppedWidth, croppedHeight, croppedData);
    }
  };


  self.addEventListener("message", (event) => {
    const areaImageData = SMAAAreaImageData.generate();
    const searchImageData = SMAASearchImageData.generate();
    postMessage({ areaImageData, searchImageData }, [
      areaImageData.data.buffer,
      searchImageData.data.buffer
    ]);
    close();
  });
})();
`;


  function generate(useCache = true) {
    const workerURL = URL.createObjectURL(new Blob([worker_default2], {
      type: "text/javascript"
    }));
    const worker = new Worker(workerURL);
    URL.revokeObjectURL(workerURL);
    return new Promise((resolve, reject) => {
      worker.addEventListener("error", (event) => reject(event.error));
      worker.addEventListener("message", (event) => {
        const searchImageData = RawImageData.from(event.data.searchImageData);
        const areaImageData = RawImageData.from(event.data.areaImageData);
        const urls = [
          searchImageData.toCanvas().toDataURL("image/png", 1),
          areaImageData.toCanvas().toDataURL("image/png", 1)
        ];
        if (useCache) {
          localStorage.setItem("smaa-search", urls[0]);
          localStorage.setItem("smaa-area", urls[1]);
        }
        resolve(urls);
      });
      worker.postMessage(null);
    });
  }
  var SMAAImageGenerator = class {
    /**
     * Constructs a new SMAA image generator.
     */
    constructor() {
      this.disableCache = false;
    }
    /**
     * Enables or disables caching via localStorage.
     *
     * @param {Boolean} value - Whether the cache should be enabled.
     */
    setCacheEnabled(value) {
      this.disableCache = !value;
    }
    /**
     * Generates the SMAA data images.
     *
     * @example
     * SMAAImageGenerator.generate().then(([search, area]) => {
     *   const smaaEffect = new SMAAEffect(search, area);
     * });
     * @return {Promise<Image[]>} A promise that returns the search image and area image as a pair.
     */
    generate() {
      const useCache = !this.disableCache && window.localStorage !== void 0;
      const cachedURLs = useCache ? [
        localStorage.getItem("smaa-search"),
        localStorage.getItem("smaa-area")
      ] : [null, null];
      const promise = cachedURLs[0] !== null && cachedURLs[1] !== null ? Promise.resolve(cachedURLs) : generate(useCache);
      return promise.then((urls) => {
        return new Promise((resolve, reject) => {
          const searchImage = new Image();
          const areaImage = new Image();
          const manager = new import_three54.LoadingManager();
          manager.onLoad = () => resolve([searchImage, areaImage]);
          manager.onError = reject;
          searchImage.addEventListener("error", (e) => manager.itemError("smaa-search"));
          areaImage.addEventListener("error", (e) => manager.itemError("smaa-area"));
          searchImage.addEventListener("load", () => manager.itemEnd("smaa-search"));
          areaImage.addEventListener("load", () => manager.itemEnd("smaa-area"));
          manager.itemStart("smaa-search");
          manager.itemStart("smaa-area");
          searchImage.src = urls[0];
          areaImage.src = urls[1];
        });
      });
    }
  };


  var edges = /* @__PURE__ */ new Map([
    [bilinear(0, 0, 0, 0), new Float32Array([0, 0, 0, 0])],
    [bilinear(0, 0, 0, 1), new Float32Array([0, 0, 0, 1])],
    [bilinear(0, 0, 1, 0), new Float32Array([0, 0, 1, 0])],
    [bilinear(0, 0, 1, 1), new Float32Array([0, 0, 1, 1])],
    [bilinear(0, 1, 0, 0), new Float32Array([0, 1, 0, 0])],
    [bilinear(0, 1, 0, 1), new Float32Array([0, 1, 0, 1])],
    [bilinear(0, 1, 1, 0), new Float32Array([0, 1, 1, 0])],
    [bilinear(0, 1, 1, 1), new Float32Array([0, 1, 1, 1])],
    [bilinear(1, 0, 0, 0), new Float32Array([1, 0, 0, 0])],
    [bilinear(1, 0, 0, 1), new Float32Array([1, 0, 0, 1])],
    [bilinear(1, 0, 1, 0), new Float32Array([1, 0, 1, 0])],
    [bilinear(1, 0, 1, 1), new Float32Array([1, 0, 1, 1])],
    [bilinear(1, 1, 0, 0), new Float32Array([1, 1, 0, 0])],
    [bilinear(1, 1, 0, 1), new Float32Array([1, 1, 0, 1])],
    [bilinear(1, 1, 1, 0), new Float32Array([1, 1, 1, 0])],
    [bilinear(1, 1, 1, 1), new Float32Array([1, 1, 1, 1])]
  ]);
  function lerp2(a, b, p) {
    return a + (b - a) * p;
  }
  function bilinear(e0, e1, e2, e3) {
    const a = lerp2(e0, e1, 1 - 0.25);
    const b = lerp2(e2, e3, 1 - 0.25);
    return lerp2(a, b, 1 - 0.125);
  }
  function deltaLeft(left, top) {
    let d = 0;
    if (top[3] === 1) {
      d += 1;
    }
    if (d === 1 && top[2] === 1 && left[1] !== 1 && left[3] !== 1) {
      d += 1;
    }
    return d;
  }
  function deltaRight(left, top) {
    let d = 0;
    if (top[3] === 1 && left[1] !== 1 && left[3] !== 1) {
      d += 1;
    }
    if (d === 1 && top[2] === 1 && left[0] !== 1 && left[2] !== 1) {
      d += 1;
    }
    return d;
  }
  var SMAASearchImageData = class {
    /**
     * Creates a new search image.
     *
     * @return {RawImageData} The generated image data.
     */
    static generate() {
      const width = 66;
      const height = 33;
      const halfWidth = width / 2;
      const croppedWidth = 64;
      const croppedHeight = 16;
      const data = new Uint8ClampedArray(width * height);
      const croppedData = new Uint8ClampedArray(croppedWidth * croppedHeight * 4);
      for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
          const s = 0.03125 * x;
          const t = 0.03125 * y;
          if (edges.has(s) && edges.has(t)) {
            const e1 = edges.get(s);
            const e2 = edges.get(t);
            const i = y * width + x;
            data[i] = 127 * deltaLeft(e1, e2);
            data[i + halfWidth] = 127 * deltaRight(e1, e2);
          }
        }
      }
      for (let i = 0, y = height - croppedHeight; y < height; ++y) {
        for (let x = 0; x < croppedWidth; ++x, i += 4) {
          croppedData[i] = data[y * width + x];
          croppedData[i + 3] = 255;
        }
      }
      return new RawImageData(croppedWidth, croppedHeight, croppedData);
    }
  };


  var import_three55 = __require("three");
  function getNoise(size, format, type) {
    const channels = /* @__PURE__ */ new Map([
      [import_three55.LuminanceFormat, 1],
      [import_three55.RedFormat, 1],
      [import_three55.RGFormat, 2],
      [import_three55.RGBAFormat, 4]
    ]);
    let data;
    if (!channels.has(format)) {
      console.error("Invalid noise texture format");
    }
    if (type === import_three55.UnsignedByteType) {
      data = new Uint8Array(size * channels.get(format));
      for (let i = 0, l = data.length; i < l; ++i) {
        data[i] = Math.random() * 255 + 0.5;
      }
    } else {
      data = new Float32Array(size * channels.get(format));
      for (let i = 0, l = data.length; i < l; ++i) {
        data[i] = Math.random();
      }
    }
    return data;
  }
  var NoiseTexture = class extends import_three55.DataTexture {
    /**
     * Constructs a new noise texture.
     *
     * The texture format can be either `LuminanceFormat` or `RGBAFormat`. Additionally, the formats `RedFormat` and
     * `RGFormat` can be used in a WebGL 2 context.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     * @param {Number} [format=LuminanceFormat] - The texture format.
     * @param {Number} [type=UnsignedByteType] - The texture type.
     */
    constructor(width, height, format = import_three55.LuminanceFormat, type = import_three55.UnsignedByteType) {
      super(getNoise(width * height, format, type), width, height, format, type);
      this.needsUpdate = true;
    }
  };


  var glitch_default = "uniform lowp sampler2D perturbationMap;\n\nuniform bool active;\nuniform float columns;\nuniform float random;\nuniform vec2 seeds;\nuniform vec2 distortion;\n\nvoid mainUv(inout vec2 uv) {\n\n	if(active) {\n\n		if(uv.y < distortion.x + columns && uv.y > distortion.x - columns * random) {\n\n			float sx = clamp(ceil(seeds.x), 0.0, 1.0);\n			uv.y = sx * (1.0 - (uv.y + distortion.y)) + (1.0 - sx) * distortion.y;\n\n		}\n\n		if(uv.x < distortion.y + columns && uv.x > distortion.y - columns * random) {\n\n			float sy = clamp(ceil(seeds.y), 0.0, 1.0);\n			uv.x = sy * distortion.x + (1.0 - sy) * (1.0 - (uv.x + distortion.x));\n\n		}\n\n		vec2 normal = texture2D(perturbationMap, uv * random * random).rg;\n		uv += normal * seeds * (random * 0.2);\n\n	}\n\n}\n";


  var textureTag = "Glitch.Generated";
  function randomFloat(low, high) {
    return low + Math.random() * (high - low);
  }
  var GlitchEffect = class extends Effect {
    /**
     * Constructs a new glitch effect.
     *
     * TODO Change ratio to 0.15.
     * @param {Object} [options] - The options.
     * @param {Vector2} [options.chromaticAberrationOffset] - A chromatic aberration offset. If provided, the glitch effect will influence this offset.
     * @param {Vector2} [options.delay] - The minimum and maximum delay between glitch activations in seconds.
     * @param {Vector2} [options.duration] - The minimum and maximum duration of a glitch in seconds.
     * @param {Vector2} [options.strength] - The strength of weak and strong glitches.
     * @param {Texture} [options.perturbationMap] - A perturbation map. If none is provided, a noise texture will be created.
     * @param {Number} [options.dtSize=64] - The size of the generated noise map. Will be ignored if a perturbation map is provided.
     * @param {Number} [options.columns=0.05] - The scale of the blocky glitch columns.
     * @param {Number} [options.ratio=0.85] - The threshold for strong glitches.
     */
    constructor({
      chromaticAberrationOffset = null,
      delay = new import_three56.Vector2(1.5, 3.5),
      duration = new import_three56.Vector2(0.6, 1),
      strength = new import_three56.Vector2(0.3, 1),
      columns = 0.05,
      ratio = 0.85,
      perturbationMap = null,
      dtSize = 64
    } = {}) {
      super("GlitchEffect", glitch_default, {
        uniforms: /* @__PURE__ */ new Map([
          ["perturbationMap", new import_three56.Uniform(null)],
          ["columns", new import_three56.Uniform(columns)],
          ["active", new import_three56.Uniform(false)],
          ["random", new import_three56.Uniform(1)],
          ["seeds", new import_three56.Uniform(new import_three56.Vector2())],
          ["distortion", new import_three56.Uniform(new import_three56.Vector2())]
        ])
      });
      if (perturbationMap === null) {
        const map = new NoiseTexture(dtSize, dtSize, import_three56.RGBAFormat);
        map.name = textureTag;
        this.perturbationMap = map;
      } else {
        this.perturbationMap = perturbationMap;
      }
      this.time = 0;
      this.distortion = this.uniforms.get("distortion").value;
      this.delay = delay;
      this.duration = duration;
      this.breakPoint = new import_three56.Vector2(
        randomFloat(this.delay.x, this.delay.y),
        randomFloat(this.duration.x, this.duration.y)
      );
      this.strength = strength;
      this.mode = GlitchMode.SPORADIC;
      this.ratio = ratio;
      this.chromaticAberrationOffset = chromaticAberrationOffset;
    }
    /**
     * Random number seeds.
     *
     * @type {Vector2}
     * @private
     */
    get seeds() {
      return this.uniforms.get("seeds").value;
    }
    /**
     * Indicates whether the glitch effect is currently active.
     *
     * @type {Boolean}
     */
    get active() {
      return this.uniforms.get("active").value;
    }
    /**
     * Indicates whether the glitch effect is currently active.
     *
     * @deprecated Use active instead.
     * @return {Boolean} Whether the glitch effect is active.
     */
    isActive() {
      return this.active;
    }
    /**
     * The minimum delay between glitch activations.
     *
     * @type {Number}
     */
    get minDelay() {
      return this.delay.x;
    }
    set minDelay(value) {
      this.delay.x = value;
    }
    /**
     * Returns the minimum delay between glitch activations.
     *
     * @deprecated Use minDelay instead.
     * @return {Number} The minimum delay in seconds.
     */
    getMinDelay() {
      return this.delay.x;
    }
    /**
     * Sets the minimum delay between glitch activations.
     *
     * @deprecated Use minDelay instead.
     * @param {Number} value - The minimum delay in seconds.
     */
    setMinDelay(value) {
      this.delay.x = value;
    }
    /**
     * The maximum delay between glitch activations.
     *
     * @type {Number}
     */
    get maxDelay() {
      return this.delay.y;
    }
    set maxDelay(value) {
      this.delay.y = value;
    }
    /**
     * Returns the maximum delay between glitch activations.
     *
     * @deprecated Use maxDelay instead.
     * @return {Number} The maximum delay in seconds.
     */
    getMaxDelay() {
      return this.delay.y;
    }
    /**
     * Sets the maximum delay between glitch activations.
     *
     * @deprecated Use maxDelay instead.
     * @param {Number} value - The maximum delay in seconds.
     */
    setMaxDelay(value) {
      this.delay.y = value;
    }
    /**
     * The minimum duration of sporadic glitches.
     *
     * @type {Number}
     */
    get minDuration() {
      return this.duration.x;
    }
    set minDuration(value) {
      this.duration.x = value;
    }
    /**
     * Returns the minimum duration of sporadic glitches.
     *
     * @deprecated Use minDuration instead.
     * @return {Number} The minimum duration in seconds.
     */
    getMinDuration() {
      return this.duration.x;
    }
    /**
     * Sets the minimum duration of sporadic glitches.
     *
     * @deprecated Use minDuration instead.
     * @param {Number} value - The minimum duration in seconds.
     */
    setMinDuration(value) {
      this.duration.x = value;
    }
    /**
     * The maximum duration of sporadic glitches.
     *
     * @type {Number}
     */
    get maxDuration() {
      return this.duration.y;
    }
    set maxDuration(value) {
      this.duration.y = value;
    }
    /**
     * Returns the maximum duration of sporadic glitches.
     *
     * @deprecated Use maxDuration instead.
     * @return {Number} The maximum duration in seconds.
     */
    getMaxDuration() {
      return this.duration.y;
    }
    /**
     * Sets the maximum duration of sporadic glitches.
     *
     * @deprecated Use maxDuration instead.
     * @param {Number} value - The maximum duration in seconds.
     */
    setMaxDuration(value) {
      this.duration.y = value;
    }
    /**
     * The strength of weak glitches.
     *
     * @type {Number}
     */
    get minStrength() {
      return this.strength.x;
    }
    set minStrength(value) {
      this.strength.x = value;
    }
    /**
     * Returns the strength of weak glitches.
     *
     * @deprecated Use minStrength instead.
     * @return {Number} The strength.
     */
    getMinStrength() {
      return this.strength.x;
    }
    /**
     * Sets the strength of weak glitches.
     *
     * @deprecated Use minStrength instead.
     * @param {Number} value - The strength.
     */
    setMinStrength(value) {
      this.strength.x = value;
    }
    /**
     * The strength of strong glitches.
     *
     * @type {Number}
     */
    get maxStrength() {
      return this.strength.y;
    }
    set maxStrength(value) {
      this.strength.y = value;
    }
    /**
     * Returns the strength of strong glitches.
     *
     * @deprecated Use maxStrength instead.
     * @return {Number} The strength.
     */
    getMaxStrength() {
      return this.strength.y;
    }
    /**
     * Sets the strength of strong glitches.
     *
     * @deprecated Use maxStrength instead.
     * @param {Number} value - The strength.
     */
    setMaxStrength(value) {
      this.strength.y = value;
    }
    /**
     * Returns the current glitch mode.
     *
     * @deprecated Use mode instead.
     * @return {GlitchMode} The mode.
     */
    getMode() {
      return this.mode;
    }
    /**
     * Sets the current glitch mode.
     *
     * @deprecated Use mode instead.
     * @param {GlitchMode} value - The mode.
     */
    setMode(value) {
      this.mode = value;
    }
    /**
     * Returns the glitch ratio.
     *
     * @deprecated Use ratio instead.
     * @return {Number} The ratio.
     */
    getGlitchRatio() {
      return 1 - this.ratio;
    }
    /**
     * Sets the ratio of weak (0.0) and strong (1.0) glitches.
     *
     * @deprecated Use ratio instead.
     * @param {Number} value - The ratio. Range is [0.0, 1.0].
     */
    setGlitchRatio(value) {
      this.ratio = Math.min(Math.max(1 - value, 0), 1);
    }
    /**
     * The glitch column size.
     *
     * @type {Number}
     */
    get columns() {
      return this.uniforms.get("columns").value;
    }
    set columns(value) {
      this.uniforms.get("columns").value = value;
    }
    /**
     * Returns the glitch column size.
     *
     * @deprecated Use columns instead.
     * @return {Number} The glitch column size.
     */
    getGlitchColumns() {
      return this.columns;
    }
    /**
     * Sets the glitch column size.
     *
     * @deprecated Use columns instead.
     * @param {Number} value - The glitch column size.
     */
    setGlitchColumns(value) {
      this.columns = value;
    }
    /**
     * Returns the chromatic aberration offset.
     *
     * @deprecated Use chromaticAberrationOffset instead.
     * @return {Vector2} The offset.
     */
    getChromaticAberrationOffset() {
      return this.chromaticAberrationOffset;
    }
    /**
     * Sets the chromatic aberration offset.
     *
     * @deprecated Use chromaticAberrationOffset instead.
     * @param {Vector2} value - The offset.
     */
    setChromaticAberrationOffset(value) {
      this.chromaticAberrationOffset = value;
    }
    /**
     * The perturbation map.
     *
     * @type {Texture}
     */
    get perturbationMap() {
      return this.uniforms.get("perturbationMap").value;
    }
    set perturbationMap(value) {
      const currentMap = this.perturbationMap;
      if (currentMap !== null && currentMap.name === textureTag) {
        currentMap.dispose();
      }
      value.minFilter = value.magFilter = import_three56.NearestFilter;
      value.wrapS = value.wrapT = import_three56.RepeatWrapping;
      value.generateMipmaps = false;
      this.uniforms.get("perturbationMap").value = value;
    }
    /**
     * Returns the current perturbation map.
     *
     * @deprecated Use perturbationMap instead.
     * @return {Texture} The current perturbation map.
     */
    getPerturbationMap() {
      return this.perturbationMap;
    }
    /**
     * Replaces the current perturbation map with the given one.
     *
     * The current map will be disposed if it was generated by this effect.
     *
     * @deprecated Use perturbationMap instead.
     * @param {Texture} value - The new perturbation map.
     */
    setPerturbationMap(value) {
      this.perturbationMap = value;
    }
    /**
     * Generates a perturbation map.
     *
     * @deprecated Use NoiseTexture instead.
     * @param {Number} [value=64] - The texture size.
     * @return {DataTexture} The perturbation map.
     */
    generatePerturbationMap(value = 64) {
      const map = new NoiseTexture(value, value, import_three56.RGBAFormat);
      map.name = textureTag;
      return map;
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      const mode = this.mode;
      const breakPoint = this.breakPoint;
      const offset = this.chromaticAberrationOffset;
      const s = this.strength;
      let time = this.time;
      let active = false;
      let r = 0, a = 0;
      let trigger;
      if (mode !== GlitchMode.DISABLED) {
        if (mode === GlitchMode.SPORADIC) {
          time += deltaTime;
          trigger = time > breakPoint.x;
          if (time >= breakPoint.x + breakPoint.y) {
            breakPoint.set(
              randomFloat(this.delay.x, this.delay.y),
              randomFloat(this.duration.x, this.duration.y)
            );
            time = 0;
          }
        }
        r = Math.random();
        this.uniforms.get("random").value = r;
        if (trigger && r > this.ratio || mode === GlitchMode.CONSTANT_WILD) {
          active = true;
          r *= s.y * 0.03;
          a = randomFloat(-Math.PI, Math.PI);
          this.seeds.set(randomFloat(-s.y, s.y), randomFloat(-s.y, s.y));
          this.distortion.set(randomFloat(0, 1), randomFloat(0, 1));
        } else if (trigger || mode === GlitchMode.CONSTANT_MILD) {
          active = true;
          r *= s.x * 0.03;
          a = randomFloat(-Math.PI, Math.PI);
          this.seeds.set(randomFloat(-s.x, s.x), randomFloat(-s.x, s.x));
          this.distortion.set(randomFloat(0, 1), randomFloat(0, 1));
        }
        this.time = time;
      }
      if (offset !== null) {
        if (active) {
          offset.set(Math.cos(a), Math.sin(a)).multiplyScalar(r);
        } else {
          offset.set(0, 0);
        }
      }
      this.uniforms.get("active").value = active;
    }
    /**
     * Deletes generated resources.
     */
    dispose() {
      const map = this.perturbationMap;
      if (map !== null && map.name === textureTag) {
        map.dispose();
      }
    }
  };


  var import_three57 = __require("three");


  var god_rays_default = "#ifdef FRAMEBUFFER_PRECISION_HIGH\n\n	uniform mediump sampler2D map;\n\n#else\n\n	uniform lowp sampler2D map;\n\n#endif\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	outputColor = texture2D(map, uv);\n\n}\n";


  var v = /* @__PURE__ */ new import_three57.Vector3();
  var m = /* @__PURE__ */ new import_three57.Matrix4();
  var GodRaysEffect = class extends Effect {
    /**
     * Constructs a new god rays effect.
     *
     * @param {Camera} [camera] - The main camera.
     * @param {Mesh|Points} [lightSource] - The light source. Must not write depth and has to be flagged as transparent.
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function of this effect.
     * @param {Number} [options.samples=60.0] - The number of samples per pixel.
     * @param {Number} [options.density=0.96] - The density of the light rays.
     * @param {Number} [options.decay=0.9] - An illumination decay factor.
     * @param {Number} [options.weight=0.4] - A light ray weight factor.
     * @param {Number} [options.exposure=0.6] - A constant attenuation coefficient.
     * @param {Number} [options.clampMax=1.0] - An upper bound for the saturation of the overall effect.
     * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     * @param {KernelSize} [options.kernelSize=KernelSize.SMALL] - The blur kernel size. Has no effect if blur is disabled.
     * @param {Boolean} [options.blur=true] - Whether the god rays should be blurred to reduce artifacts.
     */
    constructor(camera, lightSource, {
      blendFunction = BlendFunction.SCREEN,
      samples = 60,
      density = 0.96,
      decay = 0.9,
      weight = 0.4,
      exposure = 0.6,
      clampMax = 1,
      blur = true,
      kernelSize = KernelSize.SMALL,
      resolutionScale = 0.5,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("GodRaysEffect", god_rays_default, {
        blendFunction,
        attributes: EffectAttribute.DEPTH,
        uniforms: /* @__PURE__ */ new Map([
          ["map", new import_three57.Uniform(null)]
        ])
      });
      this.camera = camera;
      this._lightSource = lightSource;
      this.lightSource = lightSource;
      this.lightScene = new import_three57.Scene();
      this.screenPosition = new import_three57.Vector2();
      this.renderTargetA = new import_three57.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTargetA.texture.name = "GodRays.Target.A";
      this.renderTargetB = this.renderTargetA.clone();
      this.renderTargetB.texture.name = "GodRays.Target.B";
      this.uniforms.get("map").value = this.renderTargetB.texture;
      this.renderTargetLight = new import_three57.WebGLRenderTarget(1, 1);
      this.renderTargetLight.texture.name = "GodRays.Light";
      this.renderTargetLight.depthTexture = new import_three57.DepthTexture();
      this.renderPassLight = new RenderPass(this.lightScene, camera);
      this.renderPassLight.clearPass.overrideClearColor = new import_three57.Color(0);
      this.clearPass = new ClearPass(true, false, false);
      this.clearPass.overrideClearColor = new import_three57.Color(0);
      this.blurPass = new KawaseBlurPass({ kernelSize });
      this.blurPass.enabled = blur;
      this.depthMaskPass = new ShaderPass(new DepthMaskMaterial());
      const depthMaskMaterial = this.depthMaskMaterial;
      depthMaskMaterial.depthBuffer1 = this.renderTargetLight.depthTexture;
      depthMaskMaterial.copyCameraSettings(camera);
      this.godRaysPass = new ShaderPass(new GodRaysMaterial(this.screenPosition));
      const godRaysMaterial = this.godRaysMaterial;
      godRaysMaterial.density = density;
      godRaysMaterial.decay = decay;
      godRaysMaterial.weight = weight;
      godRaysMaterial.exposure = exposure;
      godRaysMaterial.maxIntensity = clampMax;
      godRaysMaterial.samples = samples;
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    }
    set mainCamera(value) {
      this.camera = value;
      this.renderPassLight.mainCamera = value;
      this.depthMaskMaterial.copyCameraSettings(value);
    }
    /**
     * Sets the light source.
     *
     * @type {Mesh|Points}
     */
    get lightSource() {
      return this._lightSource;
    }
    set lightSource(value) {
      this._lightSource = value;
      if (value !== null) {
        value.material.depthWrite = false;
        value.material.transparent = true;
      }
    }
    /**
     * Returns the blur pass that reduces aliasing artifacts and makes the light softer.
     *
     * @deprecated Use blurPass instead.
     * @return {KawaseBlurPass} The blur pass.
     */
    getBlurPass() {
      return this.blurPass;
    }
    /**
     * A texture that contains the intermediate result of this effect.
     *
     * @type {Texture}
     */
    get texture() {
      return this.renderTargetB.texture;
    }
    /**
     * Returns the god rays texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.texture;
    }
    /**
     * The depth mask material.
     *
     * @type {DepthMaskMaterial}
     * @private
     */
    get depthMaskMaterial() {
      return this.depthMaskPass.fullscreenMaterial;
    }
    /**
     * The internal god rays material.
     *
     * @type {GodRaysMaterial}
     */
    get godRaysMaterial() {
      return this.godRaysPass.fullscreenMaterial;
    }
    /**
     * Returns the god rays material.
     *
     * @deprecated Use godRaysMaterial instead.
     * @return {GodRaysMaterial} The material.
     */
    getGodRaysMaterial() {
      return this.godRaysMaterial;
    }
    /**
     * Returns the resolution of this effect.
     *
     * @deprecated Use resolution instead.
     * @return {GodRaysMaterial} The material.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * The current width of the internal render targets.
     *
     * @type {Number}
     * @deprecated Use resolution.width instead.
     */
    get width() {
      return this.resolution.width;
    }
    set width(value) {
      this.resolution.preferredWidth = value;
    }
    /**
     * The current height of the internal render targets.
     *
     * @type {Number}
     * @deprecated Use resolution.height instead.
     */
    get height() {
      return this.resolution.height;
    }
    set height(value) {
      this.resolution.preferredHeight = value;
    }
    /**
     * Indicates whether dithering is enabled.
     *
     * @type {Boolean}
     * @deprecated
     */
    get dithering() {
      return this.godRaysMaterial.dithering;
    }
    set dithering(value) {
      const material = this.godRaysMaterial;
      material.dithering = value;
      material.needsUpdate = true;
    }
    /**
     * Indicates whether the god rays should be blurred to reduce artifacts.
     *
     * @type {Boolean}
     * @deprecated Use blurPass.enabled instead.
     */
    get blur() {
      return this.blurPass.enabled;
    }
    set blur(value) {
      this.blurPass.enabled = value;
    }
    /**
     * The blur kernel size.
     *
     * @type {KernelSize}
     * @deprecated Use blurPass.kernelSize instead.
     */
    get kernelSize() {
      return this.blurPass.kernelSize;
    }
    set kernelSize(value) {
      this.blurPass.kernelSize = value;
    }
    /**
     * Returns the current resolution scale.
     *
     * @return {Number} The resolution scale.
     * @deprecated Use resolution instead.
     */
    getResolutionScale() {
      return this.resolution.scale;
    }
    /**
     * Sets the resolution scale.
     *
     * @param {Number} scale - The new resolution scale.
     * @deprecated Use resolution instead.
     */
    setResolutionScale(scale) {
      this.resolution.scale = scale;
    }
    /**
     * The number of samples per pixel.
     *
     * @type {Number}
     * @deprecated Use godRaysMaterial.samples instead.
     */
    get samples() {
      return this.godRaysMaterial.samples;
    }
    /**
     * A higher sample count improves quality at the cost of performance.
     *
     * @type {Number}
     * @deprecated Use godRaysMaterial.samples instead.
     */
    set samples(value) {
      this.godRaysMaterial.samples = value;
    }
    /**
     * Sets the depth texture.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {Number} [depthPacking=BasicDepthPacking] - The depth packing.
     */
    setDepthTexture(depthTexture, depthPacking = import_three57.BasicDepthPacking) {
      this.depthMaskPass.fullscreenMaterial.depthBuffer0 = depthTexture;
      this.depthMaskPass.fullscreenMaterial.depthPacking0 = depthPacking;
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      const lightSource = this.lightSource;
      const parent = lightSource.parent;
      const matrixAutoUpdate = lightSource.matrixAutoUpdate;
      const renderTargetA = this.renderTargetA;
      const renderTargetLight = this.renderTargetLight;
      lightSource.material.depthWrite = true;
      lightSource.matrixAutoUpdate = false;
      lightSource.updateWorldMatrix(true, false);
      if (parent !== null) {
        if (!matrixAutoUpdate) {
          m.copy(lightSource.matrix);
        }
        lightSource.matrix.copy(lightSource.matrixWorld);
      }
      this.lightScene.add(lightSource);
      this.renderPassLight.render(renderer, renderTargetLight);
      this.clearPass.render(renderer, renderTargetA);
      this.depthMaskPass.render(renderer, renderTargetLight, renderTargetA);
      lightSource.material.depthWrite = false;
      lightSource.matrixAutoUpdate = matrixAutoUpdate;
      if (parent !== null) {
        if (!matrixAutoUpdate) {
          lightSource.matrix.copy(m);
        }
        parent.add(lightSource);
      }
      v.setFromMatrixPosition(lightSource.matrixWorld).project(this.camera);
      this.screenPosition.set(
        Math.min(Math.max((v.x + 1) * 0.5, -1), 2),
        Math.min(Math.max((v.y + 1) * 0.5, -1), 2)
      );
      if (this.blurPass.enabled) {
        this.blurPass.render(renderer, renderTargetA, renderTargetA);
      }
      this.godRaysPass.render(renderer, renderTargetA, this.renderTargetB);
    }
    /**
     * Updates the size of internal render targets.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      const w = resolution.width, h = resolution.height;
      this.renderTargetA.setSize(w, h);
      this.renderTargetB.setSize(w, h);
      this.renderTargetLight.setSize(w, h);
      this.blurPass.resolution.copy(resolution);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      this.blurPass.initialize(renderer, alpha, frameBufferType);
      this.renderPassLight.initialize(renderer, alpha, frameBufferType);
      this.depthMaskPass.initialize(renderer, alpha, frameBufferType);
      this.godRaysPass.initialize(renderer, alpha, frameBufferType);
      if (frameBufferType !== void 0) {
        this.renderTargetA.texture.type = frameBufferType;
        this.renderTargetB.texture.type = frameBufferType;
        this.renderTargetLight.texture.type = frameBufferType;
        if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.renderTargetA.texture, SRGBColorSpace);
          setTextureColorSpace(this.renderTargetB.texture, SRGBColorSpace);
          setTextureColorSpace(this.renderTargetLight.texture, SRGBColorSpace);
        }
      }
    }
  };


  var import_three58 = __require("three");


  var grid_default = "uniform vec2 scale;\nuniform float lineWidth;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	float grid = 0.5 - max(abs(mod(uv.x * scale.x, 1.0) - 0.5), abs(mod(uv.y * scale.y, 1.0) - 0.5));\n	outputColor = vec4(vec3(smoothstep(0.0, lineWidth, grid)), inputColor.a);\n\n}\n";


  var GridEffect = class extends Effect {
    /**
     * Constructs a new grid effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.OVERLAY] - The blend function of this effect.
     * @param {Number} [options.scale=1.0] - The scale of the grid pattern.
     * @param {Number} [options.lineWidth=0.0] - The line width of the grid pattern.
     */
    constructor({ blendFunction = BlendFunction.OVERLAY, scale = 1, lineWidth = 0 } = {}) {
      super("GridEffect", grid_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["scale", new import_three58.Uniform(new import_three58.Vector2())],
          ["lineWidth", new import_three58.Uniform(lineWidth)]
        ])
      });
      this.resolution = new import_three58.Vector2();
      this.s = 0;
      this.scale = scale;
      this.l = 0;
      this.lineWidth = lineWidth;
    }
    /**
     * The scale.
     *
     * @type {Number}
     */
    get scale() {
      return this.s;
    }
    set scale(value) {
      this.s = Math.max(value, 1e-6);
      this.setSize(this.resolution.width, this.resolution.height);
    }
    /**
     * Returns the current grid scale.
     *
     * @deprecated Use scale instead.
     * @return {Number} The grid scale.
     */
    getScale() {
      return this.scale;
    }
    /**
     * Sets the grid scale.
     *
     * @deprecated Use scale instead.
     * @param {Number} value - The new grid scale.
     */
    setScale(value) {
      this.scale = value;
    }
    /**
     * The line width.
     *
     * @type {Number}
     */
    get lineWidth() {
      return this.l;
    }
    set lineWidth(value) {
      this.l = value;
      this.setSize(this.resolution.width, this.resolution.height);
    }
    /**
     * Returns the current grid line width.
     *
     * @deprecated Use lineWidth instead.
     * @return {Number} The grid line width.
     */
    getLineWidth() {
      return this.lineWidth;
    }
    /**
     * Sets the grid line width.
     *
     * @deprecated Use lineWidth instead.
     * @param {Number} value - The new grid line width.
     */
    setLineWidth(value) {
      this.lineWidth = value;
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.resolution.set(width, height);
      const aspect = width / height;
      const scale = this.scale * (height * 0.125);
      this.uniforms.get("scale").value.set(aspect * scale, scale);
      this.uniforms.get("lineWidth").value = scale / height + this.lineWidth;
    }
  };


  var import_three59 = __require("three");





  var HueSaturationEffect = class extends Effect {
    /**
     * Constructs a new hue/saturation effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
     * @param {Number} [options.hue=0.0] - The hue in radians.
     * @param {Number} [options.saturation=0.0] - The saturation factor, ranging from -1 to 1, where 0 means no change.
     */
    constructor({ blendFunction = BlendFunction.SRC, hue = 0, saturation = 0 } = {}) {
      super("HueSaturationEffect", hue_saturation_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["hue", new import_three59.Uniform(new import_three59.Vector3())],
          ["saturation", new import_three59.Uniform(saturation)]
        ])
      });
      this.hue = hue;
    }
    /**
     * The saturation.
     *
     * @type {Number}
     */
    get saturation() {
      return this.uniforms.get("saturation").value;
    }
    set saturation(value) {
      this.uniforms.get("saturation").value = value;
    }
    /**
     * Returns the saturation.
     *
     * @deprecated Use saturation instead.
     * @return {Number} The saturation.
     */
    getSaturation() {
      return this.saturation;
    }
    /**
     * Sets the saturation.
     *
     * @deprecated Use saturation instead.
     * @param {Number} value - The saturation.
     */
    setSaturation(value) {
      this.saturation = value;
    }
    /**
     * The hue.
     *
     * @type {Number}
     */
    get hue() {
      const hue = this.uniforms.get("hue").value;
      return Math.acos((hue.x * 3 - 1) / 2);
    }
    set hue(value) {
      const s = Math.sin(value), c2 = Math.cos(value);
      this.uniforms.get("hue").value.set(
        (2 * c2 + 1) / 3,
        (-Math.sqrt(3) * s - c2 + 1) / 3,
        (Math.sqrt(3) * s - c2 + 1) / 3
      );
    }
    /**
     * Returns the hue.
     *
     * @deprecated Use hue instead.
     * @return {Number} The hue in radians.
     */
    getHue() {
      return this.hue;
    }
    /**
     * Sets the hue.
     *
     * @deprecated Use hue instead.
     * @param {Number} value - The hue in radians.
     */
    setHue(value) {
      this.hue = value;
    }
  };


  var import_three60 = __require("three");





  var LensDistortionEffect = class extends Effect {
    /**
     * Constructs a new lens distortion effect.
     *
     * @param {Object} [options] - The options.
     * @param {Vector2} [options.distortion] - The distortion value.
     * @param {Vector2} [options.principalPoint] - The center point.
     * @param {Vector2} [options.focalLength] - The focal length.
     * @param {Number} [options.skew=0] - The skew value.
     */
    constructor({
      distortion = new import_three60.Vector2(0, 0),
      principalPoint = new import_three60.Vector2(0, 0),
      focalLength = new import_three60.Vector2(1, 1),
      skew = 0
    } = {}) {
      super("LensDistortionEffect", lens_distortion_default, {
        uniforms: /* @__PURE__ */ new Map([
          ["distortion", new import_three60.Uniform(distortion)],
          ["principalPoint", new import_three60.Uniform(principalPoint)],
          ["focalLength", new import_three60.Uniform(focalLength)],
          ["skew", new import_three60.Uniform(skew)]
        ])
      });
    }
    /**
     * The radial distortion coefficients. Default is (0, 0).
     *
     * @type {Vector2}
     */
    get distortion() {
      return this.uniforms.get("distortion").value;
    }
    set distortion(value) {
      this.uniforms.get("distortion").value = value;
    }
    /**
     * The principal point. Default is (0, 0).
     *
     * @type {Vector2}
     */
    get principalPoint() {
      return this.uniforms.get("principalPoint").value;
    }
    set principalPoint(value) {
      this.uniforms.get("principalPoint").value = value;
    }
    /**
     * The focal length. Default is (1, 1).
     *
     * @type {Vector2}
     */
    get focalLength() {
      return this.uniforms.get("focalLength").value;
    }
    set focalLength(value) {
      this.uniforms.get("focalLength").value = value;
    }
    /**
     * The skew factor in radians.
     *
     * @type {Number}
     */
    get skew() {
      return this.uniforms.get("skew").value;
    }
    set skew(value) {
      this.uniforms.get("skew").value = value;
    }
  };


  var import_three61 = __require("three");


  var lut_1d_default = "#ifdef LUT_PRECISION_HIGH\n\n	#ifdef GL_FRAGMENT_PRECISION_HIGH\n\n		uniform highp sampler2D lut;\n\n	#else\n\n		uniform mediump sampler2D lut;\n\n	#endif\n\n#else\n\n	uniform lowp sampler2D lut;\n\n#endif\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	outputColor = vec4(\n		texture2D(lut, vec2(inputColor.r, 0.5)).r,\n		texture2D(lut, vec2(inputColor.g, 0.5)).r,\n		texture2D(lut, vec2(inputColor.b, 0.5)).r,\n		inputColor.a\n	);\n\n}\n";


  var LUT1DEffect = class extends Effect {
    /**
     * Constructs a new color grading effect.
     *
     * @param {Texture} lut - The lookup texture.
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
     */
    constructor(lut, { blendFunction = BlendFunction.SRC } = {}) {
      super("LUT1DEffect", lut_1d_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([["lut", new import_three61.Uniform(null)]])
      });
      this.lut = lut;
    }
    /**
     * The LUT.
     *
     * @type {Texture}
     */
    get lut() {
      return this.uniforms.get("lut").value;
    }
    set lut(value) {
      this.uniforms.get("lut").value = value;
      if (value !== null && (value.type === import_three61.FloatType || value.type === import_three61.HalfFloatType)) {
        this.defines.set("LUT_PRECISION_HIGH", "1");
      }
    }
  };


  var import_three62 = __require("three");





  var LUT3DEffect = class extends Effect {
    /**
     * Constructs a new color grading effect.
     *
     * @param {Texture} lut - The lookup texture.
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
     * @param {Boolean} [options.tetrahedralInterpolation=false] - Enables or disables tetrahedral interpolation.
     * @param {TextureEncoding} [options.inputEncoding=sRGBEncoding] - Deprecated.
     * @param {ColorSpace} [options.inputColorSpace=SRGBColorSpace] - The input color space.
     */
    constructor(lut, {
      blendFunction = BlendFunction.SRC,
      tetrahedralInterpolation = false,
      inputEncoding = import_three62.sRGBEncoding,
      inputColorSpace
    } = {}) {
      super("LUT3DEffect", lut_3d_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["lut", new import_three62.Uniform(null)],
          ["scale", new import_three62.Uniform(new import_three62.Vector3())],
          ["offset", new import_three62.Uniform(new import_three62.Vector3())],
          ["domainMin", new import_three62.Uniform(null)],
          ["domainMax", new import_three62.Uniform(null)]
        ])
      });
      this.tetrahedralInterpolation = tetrahedralInterpolation;
      this.inputColorSpace = inputColorSpace || encodingToColorSpace.get(inputEncoding);
      this.lut = lut;
    }
    /**
     * The input encoding. Default is `sRGBEncoding`.
     *
     * Set this to `LinearEncoding` if your LUT expects linear color input.
     *
     * @deprecated Use inputColorSpace instead.
     * @type {TextureEncoding}
     */
    get inputEncoding() {
      return this.inputColorSpace;
    }
    set inputEncoding(value) {
      this.inputColorSpace = value;
    }
    /**
     * Returns the input encoding.
     *
     * @deprecated Use inputColorSpace instead.
     * @return {TextureEncoding} The encoding.
     */
    getInputEncoding() {
      return this.inputColorSpace;
    }
    /**
     * Sets the input encoding.
     *
     * @deprecated Use inputColorSpace instead.
     * @param {TextureEncoding} value - The encoding.
     */
    setInputEncoding(value) {
      this.inputColorSpace = value;
    }
    /**
     * Returns the output encoding.
     *
     * @deprecated Use outputColorSpace instead.
     * @return {TextureEncoding} The encoding.
     */
    getOutputEncoding() {
      return this.outputColorSpace;
    }
    /**
     * The LUT.
     *
     * @type {Texture}
     */
    get lut() {
      return this.uniforms.get("lut").value;
    }
    set lut(value) {
      const defines = this.defines;
      const uniforms = this.uniforms;
      if (this.lut !== value) {
        uniforms.get("lut").value = value;
        if (value !== null) {
          const image = value.image;
          const tetrahedralInterpolation = this.tetrahedralInterpolation;
          defines.clear();
          defines.set("LUT_SIZE", Math.min(image.width, image.height).toFixed(16));
          defines.set("LUT_TEXEL_WIDTH", (1 / image.width).toFixed(16));
          defines.set("LUT_TEXEL_HEIGHT", (1 / image.height).toFixed(16));
          uniforms.get("domainMin").value = null;
          uniforms.get("domainMax").value = null;
          if (value.type === import_three62.FloatType || value.type === import_three62.HalfFloatType) {
            defines.set("LUT_PRECISION_HIGH", "1");
          }
          if (image.width > image.height) {
            defines.set("LUT_STRIP_HORIZONTAL", "1");
          } else if (value instanceof import_three62.Data3DTexture) {
            defines.set("LUT_3D", "1");
          }
          if (value instanceof LookupTexture) {
            const min = value.domainMin;
            const max = value.domainMax;
            if (min.x !== 0 || min.y !== 0 || min.z !== 0 || max.x !== 1 || max.y !== 1 || max.z !== 1) {
              defines.set("CUSTOM_INPUT_DOMAIN", "1");
              uniforms.get("domainMin").value = min.clone();
              uniforms.get("domainMax").value = max.clone();
            }
          }
          this.tetrahedralInterpolation = tetrahedralInterpolation;
        }
      }
    }
    /**
     * Returns the current LUT.
     *
     * @deprecated Use lut instead.
     * @return {Texture} The LUT.
     */
    getLUT() {
      return this.lut;
    }
    /**
     * Sets the LUT.
     *
     * @deprecated Use lut instead.
     * @param {Texture} value - The LUT.
     */
    setLUT(value) {
      this.lut = value;
    }
    /**
     * Updates the scale and offset for the LUT sampling coordinates.
     *
     * @private
     */
    updateScaleOffset() {
      const lut = this.lut;
      if (lut !== null) {
        const size = Math.min(lut.image.width, lut.image.height);
        const scale = this.uniforms.get("scale").value;
        const offset = this.uniforms.get("offset").value;
        if (this.tetrahedralInterpolation && lut instanceof import_three62.Data3DTexture) {
          if (this.defines.has("CUSTOM_INPUT_DOMAIN")) {
            const domainScale = lut.domainMax.clone().sub(lut.domainMin);
            scale.setScalar(size - 1).divide(domainScale);
            offset.copy(lut.domainMin).negate().multiply(scale);
          } else {
            scale.setScalar(size - 1);
            offset.setScalar(0);
          }
        } else {
          if (this.defines.has("CUSTOM_INPUT_DOMAIN")) {
            const domainScale = lut.domainMax.clone().sub(lut.domainMin).multiplyScalar(size);
            scale.setScalar(size - 1).divide(domainScale);
            offset.copy(lut.domainMin).negate().multiply(scale).addScalar(1 / (2 * size));
          } else {
            scale.setScalar((size - 1) / size);
            offset.setScalar(1 / (2 * size));
          }
        }
      }
    }
    /**
     * Configures parameters for tetrahedral interpolation.
     *
     * @private
     */
    configureTetrahedralInterpolation() {
      const lut = this.lut;
      if (lut !== null) {
        lut.minFilter = import_three62.LinearFilter;
        lut.magFilter = import_three62.LinearFilter;
        if (this.tetrahedralInterpolation) {
          if (lut instanceof import_three62.Data3DTexture) {
            lut.minFilter = import_three62.NearestFilter;
            lut.magFilter = import_three62.NearestFilter;
          } else {
            console.warn("Tetrahedral interpolation requires a 3D texture");
          }
        }
        if (lut.source === void 0) {
          lut.needsUpdate = true;
        }
      }
    }
    /**
     * Indicates whether tetrahedral interpolation is enabled. Requires a 3D LUT, disabled by default.
     *
     * Tetrahedral interpolation produces highly accurate results but is slower than hardware interpolation.
     *
     * @type {Boolean}
     */
    get tetrahedralInterpolation() {
      return this.defines.has("TETRAHEDRAL_INTERPOLATION");
    }
    set tetrahedralInterpolation(value) {
      if (value) {
        this.defines.set("TETRAHEDRAL_INTERPOLATION", "1");
      } else {
        this.defines.delete("TETRAHEDRAL_INTERPOLATION");
      }
      this.configureTetrahedralInterpolation();
      this.updateScaleOffset();
      this.setChanged();
    }
    /**
     * Enables or disables tetrahedral interpolation.
     *
     * @deprecated Use tetrahedralInterpolation instead.
     * @param {Boolean} value - Whether tetrahedral interpolation should be enabled.
     */
    setTetrahedralInterpolationEnabled(value) {
      this.tetrahedralInterpolation = value;
    }
  };


  var noise_default = "void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	vec3 noise = vec3(rand(uv * time));\n\n	#ifdef PREMULTIPLY\n\n		outputColor = vec4(min(inputColor.rgb * noise, vec3(1.0)), inputColor.a);\n\n	#else\n\n		outputColor = vec4(noise, inputColor.a);\n\n	#endif\n\n}\n";


  var NoiseEffect = class extends Effect {
    /**
     * Constructs a new noise effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function of this effect.
     * @param {Boolean} [options.premultiply=false] - Whether the noise should be multiplied with the input colors prior to blending.
     */
    constructor({ blendFunction = BlendFunction.SCREEN, premultiply = false } = {}) {
      super("NoiseEffect", noise_default, { blendFunction });
      this.premultiply = premultiply;
    }
    /**
     * Indicates whether noise will be multiplied with the input colors prior to blending.
     *
     * @type {Boolean}
     */
    get premultiply() {
      return this.defines.has("PREMULTIPLY");
    }
    set premultiply(value) {
      if (this.premultiply !== value) {
        if (value) {
          this.defines.set("PREMULTIPLY", "1");
        } else {
          this.defines.delete("PREMULTIPLY");
        }
        this.setChanged();
      }
    }
    /**
     * Indicates whether noise will be multiplied with the input colors prior to blending.
     *
     * @deprecated Use premultiply instead.
     * @return {Boolean} Whether noise is premultiplied.
     */
    isPremultiplied() {
      return this.premultiply;
    }
    /**
     * Controls whether noise should be multiplied with the input colors prior to blending.
     *
     * @deprecated Use premultiply instead.
     * @param {Boolean} value - Whether noise should be premultiplied.
     */
    setPremultiplied(value) {
      this.premultiply = value;
    }
  };


  var import_three63 = __require("three");





  var outline_default4 = "uniform float patternScale;\n\nvarying vec2 vUvPattern;\n\nvoid mainSupport(const in vec2 uv) {\n\n	vUvPattern = uv * vec2(aspect, 1.0) * patternScale;\n\n}\n";


  var OutlineEffect = class extends Effect {
    /**
     * Constructs a new outline effect.
     *
     * @param {Scene} scene - The main scene.
     * @param {Camera} camera - The main camera.
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function. Use `BlendFunction.ALPHA` for dark outlines.
     * @param {Texture} [options.patternTexture=null] - A pattern texture.
     * @param {Number} [options.patternScale=1.0] - The pattern scale.
     * @param {Number} [options.edgeStrength=1.0] - The edge strength.
     * @param {Number} [options.pulseSpeed=0.0] - The pulse speed. A value of zero disables the pulse effect.
     * @param {Number} [options.visibleEdgeColor=0xffffff] - The color of visible edges.
     * @param {Number} [options.hiddenEdgeColor=0x22090a] - The color of hidden edges.
     * @param {KernelSize} [options.kernelSize=KernelSize.VERY_SMALL] - The blur kernel size.
     * @param {Boolean} [options.blur=false] - Whether the outline should be blurred.
     * @param {Boolean} [options.xRay=true] - Whether occluded parts of selected objects should be visible.
     * @param {Number} [options.multisampling=0] - The number of samples used for multisample antialiasing. Requires WebGL 2.
     * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     */
    constructor(scene, camera, {
      blendFunction = BlendFunction.SCREEN,
      patternTexture = null,
      patternScale = 1,
      edgeStrength = 1,
      pulseSpeed = 0,
      visibleEdgeColor = 16777215,
      hiddenEdgeColor = 2230538,
      kernelSize = KernelSize.VERY_SMALL,
      blur = false,
      xRay = true,
      multisampling = 0,
      resolutionScale = 0.5,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("OutlineEffect", outline_default3, {
        uniforms: /* @__PURE__ */ new Map([
          ["maskTexture", new import_three63.Uniform(null)],
          ["edgeTexture", new import_three63.Uniform(null)],
          ["edgeStrength", new import_three63.Uniform(edgeStrength)],
          ["visibleEdgeColor", new import_three63.Uniform(new import_three63.Color(visibleEdgeColor))],
          ["hiddenEdgeColor", new import_three63.Uniform(new import_three63.Color(hiddenEdgeColor))],
          ["pulse", new import_three63.Uniform(1)],
          ["patternScale", new import_three63.Uniform(patternScale)],
          ["patternTexture", new import_three63.Uniform(null)]
        ])
      });
      this.blendMode.addEventListener("change", (event) => {
        if (this.blendMode.blendFunction === BlendFunction.ALPHA) {
          this.defines.set("ALPHA", "1");
        } else {
          this.defines.delete("ALPHA");
        }
        this.setChanged();
      });
      this.blendMode.blendFunction = blendFunction;
      this.patternTexture = patternTexture;
      this.xRay = xRay;
      this.scene = scene;
      this.camera = camera;
      this.renderTargetMask = new import_three63.WebGLRenderTarget(1, 1);
      this.renderTargetMask.samples = multisampling;
      this.renderTargetMask.texture.name = "Outline.Mask";
      this.uniforms.get("maskTexture").value = this.renderTargetMask.texture;
      this.renderTargetOutline = new import_three63.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTargetOutline.texture.name = "Outline.Edges";
      this.uniforms.get("edgeTexture").value = this.renderTargetOutline.texture;
      this.clearPass = new ClearPass();
      this.clearPass.overrideClearColor = new import_three63.Color(0);
      this.clearPass.overrideClearAlpha = 1;
      this.depthPass = new DepthPass(scene, camera);
      this.maskPass = new RenderPass(scene, camera, new DepthComparisonMaterial(this.depthPass.texture, camera));
      const clearPass = this.maskPass.clearPass;
      clearPass.overrideClearColor = new import_three63.Color(16777215);
      clearPass.overrideClearAlpha = 1;
      this.blurPass = new KawaseBlurPass({ resolutionScale, resolutionX, resolutionY, kernelSize });
      this.blurPass.enabled = blur;
      const resolution = this.blurPass.resolution;
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
      this.outlinePass = new ShaderPass(new OutlineMaterial());
      const outlineMaterial = this.outlinePass.fullscreenMaterial;
      outlineMaterial.inputBuffer = this.renderTargetMask.texture;
      this.time = 0;
      this.forceUpdate = true;
      this.selection = new Selection();
      this.selection.layer = 10;
      this.pulseSpeed = pulseSpeed;
    }
    set mainScene(value) {
      this.scene = value;
      this.depthPass.mainScene = value;
      this.maskPass.mainScene = value;
    }
    set mainCamera(value) {
      this.camera = value;
      this.depthPass.mainCamera = value;
      this.maskPass.mainCamera = value;
      this.maskPass.overrideMaterial.copyCameraSettings(value);
    }
    /**
     * The resolution of this effect.
     *
     * @type {Resolution}
     */
    get resolution() {
      return this.blurPass.resolution;
    }
    /**
     * Returns the resolution.
     *
     * @return {Resizer} The resolution.
     */
    getResolution() {
      return this.blurPass.getResolution();
    }
    /**
     * The amount of MSAA samples.
     *
     * Requires WebGL 2. Set to zero to disable multisampling.
     *
     * @experimental Requires three >= r138.
     * @type {Number}
     */
    get multisampling() {
      return this.renderTargetMask.samples;
    }
    set multisampling(value) {
      this.renderTargetMask.samples = value;
      this.renderTargetMask.dispose();
    }
    /**
     * The pattern scale.
     *
     * @type {Number}
     */
    get patternScale() {
      return this.uniforms.get("patternScale").value;
    }
    set patternScale(value) {
      this.uniforms.get("patternScale").value = value;
    }
    /**
     * The edge strength.
     *
     * @type {Number}
     */
    get edgeStrength() {
      return this.uniforms.get("edgeStrength").value;
    }
    set edgeStrength(value) {
      this.uniforms.get("edgeStrength").value = value;
    }
    /**
     * The visible edge color.
     *
     * @type {Color}
     */
    get visibleEdgeColor() {
      return this.uniforms.get("visibleEdgeColor").value;
    }
    set visibleEdgeColor(value) {
      this.uniforms.get("visibleEdgeColor").value = value;
    }
    /**
     * The hidden edge color.
     *
     * @type {Color}
     */
    get hiddenEdgeColor() {
      return this.uniforms.get("hiddenEdgeColor").value;
    }
    set hiddenEdgeColor(value) {
      this.uniforms.get("hiddenEdgeColor").value = value;
    }
    /**
     * Returns the blur pass.
     *
     * @deprecated Use blurPass instead.
     * @return {KawaseBlurPass} The blur pass.
     */
    getBlurPass() {
      return this.blurPass;
    }
    /**
     * Returns the selection.
     *
     * @deprecated Use selection instead.
     * @return {Selection} The selection.
     */
    getSelection() {
      return this.selection;
    }
    /**
     * Returns the pulse speed.
     *
     * @deprecated Use pulseSpeed instead.
     * @return {Number} The speed.
     */
    getPulseSpeed() {
      return this.pulseSpeed;
    }
    /**
     * Sets the pulse speed. Set to zero to disable.
     *
     * @deprecated Use pulseSpeed instead.
     * @param {Number} value - The speed.
     */
    setPulseSpeed(value) {
      this.pulseSpeed = value;
    }
    /**
     * The current width of the internal render targets.
     *
     * @type {Number}
     * @deprecated Use resolution.width instead.
     */
    get width() {
      return this.resolution.width;
    }
    set width(value) {
      this.resolution.preferredWidth = value;
    }
    /**
     * The current height of the internal render targets.
     *
     * @type {Number}
     * @deprecated Use resolution.height instead.
     */
    get height() {
      return this.resolution.height;
    }
    set height(value) {
      this.resolution.preferredHeight = value;
    }
    /**
     * The selection layer.
     *
     * @type {Number}
     * @deprecated Use selection.layer instead.
     */
    get selectionLayer() {
      return this.selection.layer;
    }
    set selectionLayer(value) {
      this.selection.layer = value;
    }
    /**
     * Indicates whether dithering is enabled.
     *
     * @type {Boolean}
     * @deprecated
     */
    get dithering() {
      return this.blurPass.dithering;
    }
    set dithering(value) {
      this.blurPass.dithering = value;
    }
    /**
     * The blur kernel size.
     *
     * @type {KernelSize}
     * @deprecated Use blurPass.kernelSize instead.
     */
    get kernelSize() {
      return this.blurPass.kernelSize;
    }
    set kernelSize(value) {
      this.blurPass.kernelSize = value;
    }
    /**
     * Indicates whether the outlines should be blurred.
     *
     * @type {Boolean}
     * @deprecated Use blurPass.enabled instead.
     */
    get blur() {
      return this.blurPass.enabled;
    }
    set blur(value) {
      this.blurPass.enabled = value;
    }
    /**
     * Indicates whether X-ray mode is enabled.
     *
     * @type {Boolean}
     */
    get xRay() {
      return this.defines.has("X_RAY");
    }
    set xRay(value) {
      if (this.xRay !== value) {
        if (value) {
          this.defines.set("X_RAY", "1");
        } else {
          this.defines.delete("X_RAY");
        }
        this.setChanged();
      }
    }
    /**
     * Indicates whether X-ray mode is enabled.
     *
     * @deprecated Use xRay instead.
     * @return {Boolean} Whether X-ray mode is enabled.
     */
    isXRayEnabled() {
      return this.xRay;
    }
    /**
     * Enables or disables X-ray outlines.
     *
     * @deprecated Use xRay instead.
     * @param {Boolean} value - Whether X-ray should be enabled.
     */
    setXRayEnabled(value) {
      this.xRay = value;
    }
    /**
     * The pattern texture. Set to `null` to disable.
     *
     * @type {Texture}
     */
    get patternTexture() {
      return this.uniforms.get("patternTexture").value;
    }
    set patternTexture(value) {
      if (value !== null) {
        value.wrapS = value.wrapT = import_three63.RepeatWrapping;
        this.defines.set("USE_PATTERN", "1");
        this.setVertexShader(outline_default4);
      } else {
        this.defines.delete("USE_PATTERN");
        this.setVertexShader(null);
      }
      this.uniforms.get("patternTexture").value = value;
      this.setChanged();
    }
    /**
     * Sets the pattern texture.
     *
     * @deprecated Use patternTexture instead.
     * @param {Texture} value - The new texture.
     */
    setPatternTexture(value) {
      this.patternTexture = value;
    }
    /**
     * Returns the current resolution scale.
     *
     * @return {Number} The resolution scale.
     * @deprecated Use resolution instead.
     */
    getResolutionScale() {
      return this.resolution.scale;
    }
    /**
     * Sets the resolution scale.
     *
     * @param {Number} scale - The new resolution scale.
     * @deprecated Use resolution instead.
     */
    setResolutionScale(scale) {
      this.resolution.scale = scale;
    }
    /**
     * Clears the current selection and selects a list of objects.
     *
     * @param {Object3D[]} objects - The objects that should be outlined. This array will be copied.
     * @return {OutlinePass} This pass.
     * @deprecated Use selection.set() instead.
     */
    setSelection(objects) {
      this.selection.set(objects);
      return this;
    }
    /**
     * Clears the list of selected objects.
     *
     * @return {OutlinePass} This pass.
     * @deprecated Use selection.clear() instead.
     */
    clearSelection() {
      this.selection.clear();
      return this;
    }
    /**
     * Selects an object.
     *
     * @param {Object3D} object - The object that should be outlined.
     * @return {OutlinePass} This pass.
     * @deprecated Use selection.add() instead.
     */
    selectObject(object) {
      this.selection.add(object);
      return this;
    }
    /**
     * Deselects an object.
     *
     * @param {Object3D} object - The object that should no longer be outlined.
     * @return {OutlinePass} This pass.
     * @deprecated Use selection.delete() instead.
     */
    deselectObject(object) {
      this.selection.delete(object);
      return this;
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      const scene = this.scene;
      const camera = this.camera;
      const selection = this.selection;
      const uniforms = this.uniforms;
      const pulse = uniforms.get("pulse");
      const background = scene.background;
      const mask = camera.layers.mask;
      if (this.forceUpdate || selection.size > 0) {
        scene.background = null;
        pulse.value = 1;
        if (this.pulseSpeed > 0) {
          pulse.value = Math.cos(this.time * this.pulseSpeed * 10) * 0.375 + 0.625;
        }
        this.time += deltaTime;
        selection.setVisible(false);
        this.depthPass.render(renderer);
        selection.setVisible(true);
        camera.layers.set(selection.layer);
        this.maskPass.render(renderer, this.renderTargetMask);
        camera.layers.mask = mask;
        scene.background = background;
        this.outlinePass.render(renderer, null, this.renderTargetOutline);
        if (this.blurPass.enabled) {
          this.blurPass.render(renderer, this.renderTargetOutline, this.renderTargetOutline);
        }
      }
      this.forceUpdate = selection.size > 0;
    }
    /**
     * Updates the size of internal render targets.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.blurPass.setSize(width, height);
      this.renderTargetMask.setSize(width, height);
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      const w = resolution.width, h = resolution.height;
      this.depthPass.setSize(w, h);
      this.renderTargetOutline.setSize(w, h);
      this.outlinePass.fullscreenMaterial.setSize(w, h);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      this.blurPass.initialize(renderer, alpha, import_three63.UnsignedByteType);
      if (frameBufferType !== void 0) {
        this.depthPass.initialize(renderer, alpha, frameBufferType);
        this.maskPass.initialize(renderer, alpha, frameBufferType);
        this.outlinePass.initialize(renderer, alpha, frameBufferType);
      }
    }
  };


  var import_three64 = __require("three");


  var pixelation_default = "uniform bool active;\nuniform vec4 d;\n\nvoid mainUv(inout vec2 uv) {\n\n	if(active) {\n\n		uv = d.xy * (floor(uv * d.zw) + 0.5);\n\n	}\n\n}\n";


  var PixelationEffect = class extends Effect {
    /**
     * Constructs a new pixelation effect.
     *
     * @param {Object} [granularity=30.0] - The pixel granularity.
     */
    constructor(granularity = 30) {
      super("PixelationEffect", pixelation_default, {
        uniforms: /* @__PURE__ */ new Map([
          ["active", new import_three64.Uniform(false)],
          ["d", new import_three64.Uniform(new import_three64.Vector4())]
        ])
      });
      this.resolution = new import_three64.Vector2();
      this._granularity = 0;
      this.granularity = granularity;
    }
    /**
     * The pixel granularity.
     *
     * A higher value yields coarser visuals.
     *
     * @type {Number}
     */
    get granularity() {
      return this._granularity;
    }
    set granularity(value) {
      let d = Math.floor(value);
      if (d % 2 > 0) {
        d += 1;
      }
      this._granularity = d;
      this.uniforms.get("active").value = d > 0;
      this.setSize(this.resolution.width, this.resolution.height);
    }
    /**
     * Returns the pixel granularity.
     *
     * @deprecated Use granularity instead.
     * @return {Number} The granularity.
     */
    getGranularity() {
      return this.granularity;
    }
    /**
     * Sets the pixel granularity.
     *
     * @deprecated Use granularity instead.
     * @param {Number} value - The new granularity.
     */
    setGranularity(value) {
      this.granularity = value;
    }
    /**
     * Updates the granularity.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.set(width, height);
      const d = this.granularity;
      const x = d / resolution.x;
      const y = d / resolution.y;
      this.uniforms.get("d").value.set(x, y, 1 / x, 1 / y);
    }
  };


  var import_three65 = __require("three");





  var RealisticBokehEffect = class extends Effect {
    /**
     * Constructs a new bokeh effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
     * @param {Number} [options.focus=1.0] - The focus distance in world units.
     * @param {Number} [options.focalLength=24.0] - The focal length of the main camera.
     * @param {Number} [options.fStop=0.9] - The ratio of the lens focal length to the diameter of the entrance pupil (aperture).
     * @param {Number} [options.luminanceThreshold=0.5] - A luminance threshold.
     * @param {Number} [options.luminanceGain=2.0] - A luminance gain factor.
     * @param {Number} [options.bias=0.5] - A blur bias.
     * @param {Number} [options.fringe=0.7] - A blur offset.
     * @param {Number} [options.maxBlur=1.0] - The maximum blur strength.
     * @param {Boolean} [options.rings=3] - The number of blur iterations.
     * @param {Boolean} [options.samples=2] - The amount of samples taken per ring.
     * @param {Boolean} [options.showFocus=false] - Whether the focal point should be highlighted. Useful for debugging.
     * @param {Boolean} [options.manualDoF=false] - Enables manual control over the depth of field.
     * @param {Boolean} [options.pentagon=false] - Enables pentagonal blur shapes. Requires a high number of rings and samples.
     */
    constructor({
      blendFunction,
      focus = 1,
      focalLength = 24,
      fStop = 0.9,
      luminanceThreshold = 0.5,
      luminanceGain = 2,
      bias = 0.5,
      fringe = 0.7,
      maxBlur = 1,
      rings = 3,
      samples = 2,
      showFocus = false,
      manualDoF = false,
      pentagon = false
    } = {}) {
      super("RealisticBokehEffect", realistic_bokeh_default, {
        blendFunction,
        attributes: EffectAttribute.CONVOLUTION | EffectAttribute.DEPTH,
        uniforms: /* @__PURE__ */ new Map([
          ["focus", new import_three65.Uniform(focus)],
          ["focalLength", new import_three65.Uniform(focalLength)],
          ["fStop", new import_three65.Uniform(fStop)],
          ["luminanceThreshold", new import_three65.Uniform(luminanceThreshold)],
          ["luminanceGain", new import_three65.Uniform(luminanceGain)],
          ["bias", new import_three65.Uniform(bias)],
          ["fringe", new import_three65.Uniform(fringe)],
          ["maxBlur", new import_three65.Uniform(maxBlur)],
          ["dof", new import_three65.Uniform(null)]
        ])
      });
      this.rings = rings;
      this.samples = samples;
      this.showFocus = showFocus;
      this.manualDoF = manualDoF;
      this.pentagon = pentagon;
    }
    /**
     * The amount of blur iterations.
     *
     * @type {Number}
     */
    get rings() {
      return Number.parseInt(this.defines.get("RINGS_INT"));
    }
    set rings(value) {
      const r = Math.floor(value);
      this.defines.set("RINGS_INT", r.toFixed(0));
      this.defines.set("RINGS_FLOAT", r.toFixed(1));
      this.setChanged();
    }
    /**
     * The amount of blur samples per ring.
     *
     * @type {Number}
     */
    get samples() {
      return Number.parseInt(this.defines.get("SAMPLES_INT"));
    }
    set samples(value) {
      const s = Math.floor(value);
      this.defines.set("SAMPLES_INT", s.toFixed(0));
      this.defines.set("SAMPLES_FLOAT", s.toFixed(1));
      this.setChanged();
    }
    /**
     * Indicates whether the focal point will be highlighted.
     *
     * @type {Boolean}
     */
    get showFocus() {
      return this.defines.has("SHOW_FOCUS");
    }
    set showFocus(value) {
      if (this.showFocus !== value) {
        if (value) {
          this.defines.set("SHOW_FOCUS", "1");
        } else {
          this.defines.delete("SHOW_FOCUS");
        }
        this.setChanged();
      }
    }
    /**
     * Indicates whether the Depth of Field should be calculated manually.
     *
     * If enabled, the Depth of Field can be adjusted via the `dof` uniform.
     *
     * @type {Boolean}
     */
    get manualDoF() {
      return this.defines.has("MANUAL_DOF");
    }
    set manualDoF(value) {
      if (this.manualDoF !== value) {
        if (value) {
          this.defines.set("MANUAL_DOF", "1");
          this.uniforms.get("dof").value = new import_three65.Vector4(0.2, 1, 0.2, 2);
        } else {
          this.defines.delete("MANUAL_DOF");
          this.uniforms.get("dof").value = null;
        }
        this.setChanged();
      }
    }
    /**
     * Indicates whether the blur shape should be pentagonal.
     *
     * @type {Boolean}
     */
    get pentagon() {
      return this.defines.has("PENTAGON");
    }
    set pentagon(value) {
      if (this.pentagon !== value) {
        if (value) {
          this.defines.set("PENTAGON", "1");
        } else {
          this.defines.delete("PENTAGON");
        }
        this.setChanged();
      }
    }
  };


  var import_three66 = __require("three");


  var scanlines_default = "uniform float count;\n\n#ifdef SCROLL\n\n	uniform float scrollSpeed;\n\n#endif\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	float y = uv.y;\n\n	#ifdef SCROLL\n\n		y += time * scrollSpeed;\n\n	#endif\n\n	vec2 sl = vec2(sin(y * count), cos(y * count));\n	outputColor = vec4(sl.xyx, inputColor.a);\n\n}\n";


  var ScanlineEffect = class extends Effect {
    /**
     * Constructs a new scanline effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.OVERLAY] - The blend function of this effect.
     * @param {Number} [options.density=1.25] - The scanline density.
     * @param {Number} [options.scrollSpeed=0.0] - The scanline scroll speed.
     */
    constructor({ blendFunction = BlendFunction.OVERLAY, density = 1.25, scrollSpeed = 0 } = {}) {
      super("ScanlineEffect", scanlines_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["count", new import_three66.Uniform(0)],
          ["scrollSpeed", new import_three66.Uniform(0)]
        ])
      });
      this.resolution = new import_three66.Vector2();
      this.d = density;
      this.scrollSpeed = scrollSpeed;
    }
    /**
     * The scanline density.
     *
     * @type {Number}
     */
    get density() {
      return this.d;
    }
    set density(value) {
      this.d = value;
      this.setSize(this.resolution.width, this.resolution.height);
    }
    /**
     * Returns the current scanline density.
     *
     * @deprecated Use density instead.
     * @return {Number} The scanline density.
     */
    getDensity() {
      return this.density;
    }
    /**
     * Sets the scanline density.
     *
     * @deprecated Use density instead.
     * @param {Number} value - The new scanline density.
     */
    setDensity(value) {
      this.density = value;
    }
    /**
     * The scanline scroll speed. Default is 0 (disabled).
     *
     * @type {Number}
     */
    get scrollSpeed() {
      return this.uniforms.get("scrollSpeed").value;
    }
    set scrollSpeed(value) {
      this.uniforms.get("scrollSpeed").value = value;
      if (value === 0) {
        if (this.defines.delete("SCROLL")) {
          this.setChanged();
        }
      } else if (!this.defines.has("SCROLL")) {
        this.defines.set("SCROLL", "1");
        this.setChanged();
      }
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.resolution.set(width, height);
      this.uniforms.get("count").value = Math.round(height * this.density);
    }
  };


  var import_three67 = __require("three");


  var shock_wave_default = "uniform bool active;\nuniform vec2 center;\nuniform float waveSize;\nuniform float radius;\nuniform float maxRadius;\nuniform float amplitude;\n\nvarying float vSize;\n\nvoid mainUv(inout vec2 uv) {\n\n	if(active) {\n\n		vec2 aspectCorrection = vec2(aspect, 1.0);\n		vec2 difference = uv * aspectCorrection - center * aspectCorrection;\n		float distance = sqrt(dot(difference, difference)) * vSize;\n\n		if(distance > radius) {\n\n			if(distance < radius + waveSize) {\n\n				float angle = (distance - radius) * PI2 / waveSize;\n				float cosSin = (1.0 - cos(angle)) * 0.5;\n\n				float extent = maxRadius + waveSize;\n				float decay = max(extent - distance * distance, 0.0) / extent;\n\n				uv -= ((cosSin * amplitude * difference) / distance) * decay;\n\n			}\n\n		}\n\n	}\n\n}\n";


  var shock_wave_default2 = "uniform float size;\nuniform float cameraDistance;\n\nvarying float vSize;\n\nvoid mainSupport() {\n\n	vSize = (0.1 * cameraDistance) / size;\n\n}\n";


  var HALF_PI = Math.PI * 0.5;
  var v2 = /* @__PURE__ */ new import_three67.Vector3();
  var ab = /* @__PURE__ */ new import_three67.Vector3();
  var ShockWaveEffect = class extends Effect {
    /**
     * Constructs a new shock wave effect.
     *
     * @param {Camera} camera - The main camera.
     * @param {Vector3} [position] - The world position of the shock wave.
     * @param {Object} [options] - The options.
     * @param {Number} [options.speed=2.0] - The animation speed.
     * @param {Number} [options.maxRadius=1.0] - The extent of the shock wave.
     * @param {Number} [options.waveSize=0.2] - The wave size.
     * @param {Number} [options.amplitude=0.05] - The distortion amplitude.
     */
    constructor(camera, position = new import_three67.Vector3(), {
      speed = 2,
      maxRadius = 1,
      waveSize = 0.2,
      amplitude = 0.05
    } = {}) {
      super("ShockWaveEffect", shock_wave_default, {
        vertexShader: shock_wave_default2,
        uniforms: /* @__PURE__ */ new Map([
          ["active", new import_three67.Uniform(false)],
          ["center", new import_three67.Uniform(new import_three67.Vector2(0.5, 0.5))],
          ["cameraDistance", new import_three67.Uniform(1)],
          ["size", new import_three67.Uniform(1)],
          ["radius", new import_three67.Uniform(-waveSize)],
          ["maxRadius", new import_three67.Uniform(maxRadius)],
          ["waveSize", new import_three67.Uniform(waveSize)],
          ["amplitude", new import_three67.Uniform(amplitude)]
        ])
      });
      this.position = position;
      this.speed = speed;
      this.camera = camera;
      this.screenPosition = this.uniforms.get("center").value;
      this.time = 0;
      this.active = false;
    }
    set mainCamera(value) {
      this.camera = value;
    }
    /**
     * The amplitude.
     *
     * @type {Number}
     */
    get amplitude() {
      return this.uniforms.get("amplitude").value;
    }
    set amplitude(value) {
      this.uniforms.get("amplitude").value = value;
    }
    /**
     * The wave size.
     *
     * @type {Number}
     */
    get waveSize() {
      return this.uniforms.get("waveSize").value;
    }
    set waveSize(value) {
      this.uniforms.get("waveSize").value = value;
    }
    /**
     * The maximum radius.
     *
     * @type {Number}
     */
    get maxRadius() {
      return this.uniforms.get("maxRadius").value;
    }
    set maxRadius(value) {
      this.uniforms.get("maxRadius").value = value;
    }
    /**
     * The position of the shock wave.
     *
     * @type {Vector3}
     * @deprecated Use position instead.
     */
    get epicenter() {
      return this.position;
    }
    set epicenter(value) {
      this.position = value;
    }
    /**
     * Returns the position of the shock wave.
     *
     * @deprecated Use position instead.
     * @return {Vector3} The position.
     */
    getPosition() {
      return this.position;
    }
    /**
     * Sets the position of the shock wave.
     *
     * @deprecated Use position instead.
     * @param {Vector3} value - The position.
     */
    setPosition(value) {
      this.position = value;
    }
    /**
     * Returns the speed of the shock wave.
     *
     * @deprecated Use speed instead.
     * @return {Number} The speed.
     */
    getSpeed() {
      return this.speed;
    }
    /**
     * Sets the speed of the shock wave.
     *
     * @deprecated Use speed instead.
     * @param {Number} value - The speed.
     */
    setSpeed(value) {
      this.speed = value;
    }
    /**
     * Emits the shock wave.
     */
    explode() {
      this.time = 0;
      this.active = true;
      this.uniforms.get("active").value = true;
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [delta] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, delta) {
      const position = this.position;
      const camera = this.camera;
      const uniforms = this.uniforms;
      const uActive = uniforms.get("active");
      if (this.active) {
        const waveSize = uniforms.get("waveSize").value;
        camera.getWorldDirection(v2);
        ab.copy(camera.position).sub(position);
        uActive.value = v2.angleTo(ab) > HALF_PI;
        if (uActive.value) {
          uniforms.get("cameraDistance").value = camera.position.distanceTo(position);
          v2.copy(position).project(camera);
          this.screenPosition.set((v2.x + 1) * 0.5, (v2.y + 1) * 0.5);
        }
        this.time += delta * this.speed;
        const radius = this.time - waveSize;
        uniforms.get("radius").value = radius;
        if (radius >= (uniforms.get("maxRadius").value + waveSize) * 2) {
          this.active = false;
          uActive.value = false;
        }
      }
    }
  };


  var import_three68 = __require("three");
  var SelectiveBloomEffect = class extends BloomEffect {
    /**
     * Constructs a new selective bloom effect.
     *
     * @param {Scene} scene - The main scene.
     * @param {Camera} camera - The main camera.
     * @param {Object} [options] - The options. See {@link BloomEffect} for details.
     */
    constructor(scene, camera, options) {
      super(options);
      this.setAttributes(this.getAttributes() | EffectAttribute.DEPTH);
      this.camera = camera;
      this.depthPass = new DepthPass(scene, camera);
      this.clearPass = new ClearPass(true, false, false);
      this.clearPass.overrideClearColor = new import_three68.Color(0);
      this.depthMaskPass = new ShaderPass(new DepthMaskMaterial());
      const depthMaskMaterial = this.depthMaskMaterial;
      depthMaskMaterial.copyCameraSettings(camera);
      depthMaskMaterial.depthBuffer1 = this.depthPass.texture;
      depthMaskMaterial.depthPacking1 = import_three68.RGBADepthPacking;
      depthMaskMaterial.depthMode = import_three68.EqualDepth;
      this.renderTargetMasked = new import_three68.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTargetMasked.texture.name = "Bloom.Masked";
      this.selection = new Selection();
      this.selection.layer = 11;
      this._inverted = false;
      this._ignoreBackground = false;
    }
    set mainScene(value) {
      this.depthPass.mainScene = value;
    }
    set mainCamera(value) {
      this.camera = value;
      this.depthPass.mainCamera = value;
      this.depthMaskMaterial.copyCameraSettings(value);
    }
    /**
     * Returns the selection.
     *
     * @deprecated Use selection instead.
     * @return {Selection} The selection.
     */
    getSelection() {
      return this.selection;
    }
    /**
     * The depth mask material.
     *
     * @type {DepthMaskMaterial}
     * @private
     */
    get depthMaskMaterial() {
      return this.depthMaskPass.fullscreenMaterial;
    }
    /**
     * Indicates whether the selection should be considered inverted.
     *
     * @type {Boolean}
     */
    get inverted() {
      return this._inverted;
    }
    set inverted(value) {
      this._inverted = value;
      this.depthMaskMaterial.depthMode = value ? import_three68.NotEqualDepth : import_three68.EqualDepth;
    }
    /**
     * Indicates whether the mask is inverted.
     *
     * @deprecated Use inverted instead.
     * @return {Boolean} Whether the mask is inverted.
     */
    isInverted() {
      return this.inverted;
    }
    /**
     * Enables or disable mask inversion.
     *
     * @deprecated Use inverted instead.
     * @param {Boolean} value - Whether the mask should be inverted.
     */
    setInverted(value) {
      this.inverted = value;
    }
    /**
     * Indicates whether the background colors will be ignored.
     *
     * @type {Boolean}
     */
    get ignoreBackground() {
      return this._ignoreBackground;
    }
    set ignoreBackground(value) {
      this._ignoreBackground = value;
      this.depthMaskMaterial.maxDepthStrategy = value ? DepthTestStrategy.DISCARD_MAX_DEPTH : DepthTestStrategy.KEEP_MAX_DEPTH;
    }
    /**
     * Indicates whether the background is disabled.
     *
     * @deprecated Use ignoreBackground instead.
     * @return {Boolean} Whether the background is disabled.
     */
    isBackgroundDisabled() {
      return this.ignoreBackground;
    }
    /**
     * Enables or disables the background.
     *
     * @deprecated Use ignoreBackground instead.
     * @param {Boolean} value - Whether the background should be disabled.
     */
    setBackgroundDisabled(value) {
      this.ignoreBackground = value;
    }
    /**
     * Sets the depth texture.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
     */
    setDepthTexture(depthTexture, depthPacking = import_three68.BasicDepthPacking) {
      this.depthMaskMaterial.depthBuffer0 = depthTexture;
      this.depthMaskMaterial.depthPacking0 = depthPacking;
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      const camera = this.camera;
      const selection = this.selection;
      const inverted = this.inverted;
      let renderTarget = inputBuffer;
      if (this.ignoreBackground || !inverted || selection.size > 0) {
        const mask = camera.layers.mask;
        camera.layers.set(selection.layer);
        this.depthPass.render(renderer);
        camera.layers.mask = mask;
        renderTarget = this.renderTargetMasked;
        this.clearPass.render(renderer, renderTarget);
        this.depthMaskPass.render(renderer, inputBuffer, renderTarget);
      }
      super.update(renderer, renderTarget, deltaTime);
    }
    /**
     * Updates the size of internal render targets.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      super.setSize(width, height);
      this.renderTargetMasked.setSize(width, height);
      this.depthPass.setSize(width, height);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      super.initialize(renderer, alpha, frameBufferType);
      this.clearPass.initialize(renderer, alpha, frameBufferType);
      this.depthPass.initialize(renderer, alpha, frameBufferType);
      this.depthMaskPass.initialize(renderer, alpha, frameBufferType);
      if (renderer.capabilities.logarithmicDepthBuffer) {
        this.depthMaskPass.fullscreenMaterial.defines.LOG_DEPTH = "1";
      }
      if (frameBufferType !== void 0) {
        this.renderTargetMasked.texture.type = frameBufferType;
        if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.renderTargetMasked.texture, SRGBColorSpace);
        }
      }
    }
  };


  var import_three69 = __require("three");


  var sepia_default = "uniform vec3 weightsR;\nuniform vec3 weightsG;\nuniform vec3 weightsB;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	vec3 color = vec3(\n		dot(inputColor.rgb, weightsR),\n		dot(inputColor.rgb, weightsG),\n		dot(inputColor.rgb, weightsB)\n	);\n\n	outputColor = vec4(color, inputColor.a);\n\n}\n";


  var SepiaEffect = class extends Effect {
    /**
     * Constructs a new sepia effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
     * @param {Number} [options.intensity=1.0] - The intensity of the effect.
     */
    constructor({ blendFunction, intensity = 1 } = {}) {
      super("SepiaEffect", sepia_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["weightsR", new import_three69.Uniform(new import_three69.Vector3(0.393, 0.769, 0.189))],
          ["weightsG", new import_three69.Uniform(new import_three69.Vector3(0.349, 0.686, 0.168))],
          ["weightsB", new import_three69.Uniform(new import_three69.Vector3(0.272, 0.534, 0.131))]
        ])
      });
    }
    /**
     * The intensity.
     *
     * @deprecated Use blendMode.opacity instead.
     * @type {Number}
     */
    get intensity() {
      return this.blendMode.opacity.value;
    }
    set intensity(value) {
      this.blendMode.opacity.value = value;
    }
    /**
     * Returns the current sepia intensity.
     *
     * @deprecated Use blendMode.opacity instead.
     * @return {Number} The intensity.
     */
    getIntensity() {
      return this.intensity;
    }
    /**
     * Sets the sepia intensity.
     *
     * @deprecated Use blendMode.opacity instead.
     * @param {Number} value - The intensity.
     */
    setIntensity(value) {
      this.intensity = value;
    }
    /**
     * The weights for the red channel. Default is `(0.393, 0.769, 0.189)`.
     *
     * @type {Vector3}
     */
    get weightsR() {
      return this.uniforms.get("weightsR").value;
    }
    /**
     * The weights for the green channel. Default is `(0.349, 0.686, 0.168)`.
     *
     * @type {Vector3}
     */
    get weightsG() {
      return this.uniforms.get("weightsG").value;
    }
    /**
     * The weights for the blue channel. Default is `(0.272, 0.534, 0.131)`.
     *
     * @type {Vector3}
     */
    get weightsB() {
      return this.uniforms.get("weightsB").value;
    }
  };


  var import_three70 = __require("three");


  var searchImageDataURL_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC";








  var smaa_default2 = "varying vec2 vOffset0;\nvarying vec2 vOffset1;\n\nvoid mainSupport(const in vec2 uv) {\n\n	vOffset0 = uv + texelSize * vec2(1.0, 0.0);\n	vOffset1 = uv + texelSize * vec2(0.0, 1.0);\n\n}\n";


  var SMAAEffect = class extends Effect {
    /**
     * Constructs a new SMAA effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
     * @param {SMAAPreset} [options.preset=SMAAPreset.MEDIUM] - The quality preset.
     * @param {EdgeDetectionMode} [options.edgeDetectionMode=EdgeDetectionMode.COLOR] - The edge detection mode.
     * @param {PredicationMode} [options.predicationMode=PredicationMode.DISABLED] - The predication mode.
     */
    constructor({
      blendFunction = BlendFunction.SRC,
      preset = SMAAPreset.MEDIUM,
      edgeDetectionMode = EdgeDetectionMode.COLOR,
      predicationMode = PredicationMode.DISABLED
    } = {}) {
      super("SMAAEffect", smaa_default, {
        vertexShader: smaa_default2,
        blendFunction,
        attributes: EffectAttribute.CONVOLUTION | EffectAttribute.DEPTH,
        uniforms: /* @__PURE__ */ new Map([
          ["weightMap", new import_three70.Uniform(null)]
        ])
      });
      let searchImage, areaImage;
      if (arguments.length > 1) {
        searchImage = arguments[0];
        areaImage = arguments[1];
        if (arguments.length > 2) {
          preset = arguments[2];
        }
        if (arguments.length > 3) {
          edgeDetectionMode = arguments[3];
        }
      }
      this.renderTargetEdges = new import_three70.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTargetEdges.texture.name = "SMAA.Edges";
      this.renderTargetWeights = this.renderTargetEdges.clone();
      this.renderTargetWeights.texture.name = "SMAA.Weights";
      this.uniforms.get("weightMap").value = this.renderTargetWeights.texture;
      this.clearPass = new ClearPass(true, false, false);
      this.clearPass.overrideClearColor = new import_three70.Color(0);
      this.clearPass.overrideClearAlpha = 1;
      this.edgeDetectionPass = new ShaderPass(new EdgeDetectionMaterial());
      this.edgeDetectionMaterial.edgeDetectionMode = edgeDetectionMode;
      this.edgeDetectionMaterial.predicationMode = predicationMode;
      this.weightsPass = new ShaderPass(new SMAAWeightsMaterial());
      const loadingManager = new import_three70.LoadingManager();
      loadingManager.onLoad = () => {
        const searchTexture = new import_three70.Texture(searchImage);
        searchTexture.name = "SMAA.Search";
        searchTexture.magFilter = import_three70.NearestFilter;
        searchTexture.minFilter = import_three70.NearestFilter;
        searchTexture.generateMipmaps = false;
        searchTexture.needsUpdate = true;
        searchTexture.flipY = true;
        this.weightsMaterial.searchTexture = searchTexture;
        const areaTexture = new import_three70.Texture(areaImage);
        areaTexture.name = "SMAA.Area";
        areaTexture.magFilter = import_three70.LinearFilter;
        areaTexture.minFilter = import_three70.LinearFilter;
        areaTexture.generateMipmaps = false;
        areaTexture.needsUpdate = true;
        areaTexture.flipY = false;
        this.weightsMaterial.areaTexture = areaTexture;
        this.dispatchEvent({ type: "load" });
      };
      loadingManager.itemStart("search");
      loadingManager.itemStart("area");
      if (searchImage !== void 0 && areaImage !== void 0) {
        loadingManager.itemEnd("search");
        loadingManager.itemEnd("area");
      } else if (typeof Image !== "undefined") {
        searchImage = new Image();
        areaImage = new Image();
        searchImage.addEventListener("load", () => loadingManager.itemEnd("search"));
        areaImage.addEventListener("load", () => loadingManager.itemEnd("area"));
        searchImage.src = searchImageDataURL_default;
        areaImage.src = areaImageDataURL_default;
      }
      this.applyPreset(preset);
    }
    /**
     * The edges texture.
     *
     * @type {Texture}
     */
    get edgesTexture() {
      return this.renderTargetEdges.texture;
    }
    /**
     * Returns the edges texture.
     *
     * @deprecated Use edgesTexture instead.
     * @return {Texture} The texture.
     */
    getEdgesTexture() {
      return this.edgesTexture;
    }
    /**
     * The edge weights texture.
     *
     * @type {Texture}
     */
    get weightsTexture() {
      return this.renderTargetWeights.texture;
    }
    /**
     * Returns the edge weights texture.
     *
     * @deprecated Use weightsTexture instead.
     * @return {Texture} The texture.
     */
    getWeightsTexture() {
      return this.weightsTexture;
    }
    /**
     * The edge detection material.
     *
     * @type {EdgeDetectionMaterial}
     */
    get edgeDetectionMaterial() {
      return this.edgeDetectionPass.fullscreenMaterial;
    }
    /**
     * The edge detection material.
     *
     * @type {EdgeDetectionMaterial}
     * @deprecated Use edgeDetectionMaterial instead.
     */
    get colorEdgesMaterial() {
      return this.edgeDetectionMaterial;
    }
    /**
     * Returns the edge detection material.
     *
     * @deprecated Use edgeDetectionMaterial instead.
     * @return {EdgeDetectionMaterial} The material.
     */
    getEdgeDetectionMaterial() {
      return this.edgeDetectionMaterial;
    }
    /**
     * The edge weights material.
     *
     * @type {SMAAWeightsMaterial}
     */
    get weightsMaterial() {
      return this.weightsPass.fullscreenMaterial;
    }
    /**
     * Returns the edge weights material.
     *
     * @deprecated Use weightsMaterial instead.
     * @return {SMAAWeightsMaterial} The material.
     */
    getWeightsMaterial() {
      return this.weightsMaterial;
    }
    /**
     * Sets the edge detection sensitivity.
     *
     * See {@link EdgeDetectionMaterial#setEdgeDetectionThreshold} for more details.
     *
     * @deprecated Use edgeDetectionMaterial instead.
     * @param {Number} threshold - The edge detection sensitivity. Range: [0.05, 0.5].
     */
    setEdgeDetectionThreshold(threshold) {
      this.edgeDetectionMaterial.edgeDetectionThreshold = threshold;
    }
    /**
     * Sets the maximum amount of horizontal/vertical search steps.
     *
     * See {@link SMAAWeightsMaterial#setOrthogonalSearchSteps} for more details.
     *
     * @deprecated Use weightsMaterial instead.
     * @param {Number} steps - The search steps. Range: [0, 112].
     */
    setOrthogonalSearchSteps(steps) {
      this.weightsMaterial.orthogonalSearchSteps = steps;
    }
    /**
     * Applies the given quality preset.
     *
     * @param {SMAAPreset} preset - The preset.
     */
    applyPreset(preset) {
      const edgeDetectionMaterial = this.edgeDetectionMaterial;
      const weightsMaterial = this.weightsMaterial;
      switch (preset) {
        case SMAAPreset.LOW:
          edgeDetectionMaterial.edgeDetectionThreshold = 0.15;
          weightsMaterial.orthogonalSearchSteps = 4;
          weightsMaterial.diagonalDetection = false;
          weightsMaterial.cornerDetection = false;
          break;
        case SMAAPreset.MEDIUM:
          edgeDetectionMaterial.edgeDetectionThreshold = 0.1;
          weightsMaterial.orthogonalSearchSteps = 8;
          weightsMaterial.diagonalDetection = false;
          weightsMaterial.cornerDetection = false;
          break;
        case SMAAPreset.HIGH:
          edgeDetectionMaterial.edgeDetectionThreshold = 0.1;
          weightsMaterial.orthogonalSearchSteps = 16;
          weightsMaterial.diagonalSearchSteps = 8;
          weightsMaterial.cornerRounding = 25;
          weightsMaterial.diagonalDetection = true;
          weightsMaterial.cornerDetection = true;
          break;
        case SMAAPreset.ULTRA:
          edgeDetectionMaterial.edgeDetectionThreshold = 0.05;
          weightsMaterial.orthogonalSearchSteps = 32;
          weightsMaterial.diagonalSearchSteps = 16;
          weightsMaterial.cornerRounding = 25;
          weightsMaterial.diagonalDetection = true;
          weightsMaterial.cornerDetection = true;
          break;
      }
    }
    /**
     * Sets the depth texture.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
     */
    setDepthTexture(depthTexture, depthPacking = import_three70.BasicDepthPacking) {
      this.edgeDetectionMaterial.depthBuffer = depthTexture;
      this.edgeDetectionMaterial.depthPacking = depthPacking;
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      this.clearPass.render(renderer, this.renderTargetEdges);
      this.edgeDetectionPass.render(renderer, inputBuffer, this.renderTargetEdges);
      this.weightsPass.render(renderer, this.renderTargetEdges, this.renderTargetWeights);
    }
    /**
     * Updates the size of internal render targets.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      this.edgeDetectionMaterial.setSize(width, height);
      this.weightsMaterial.setSize(width, height);
      this.renderTargetEdges.setSize(width, height);
      this.renderTargetWeights.setSize(width, height);
    }
    /**
     * Deletes internal render targets and textures.
     */
    dispose() {
      const { searchTexture, areaTexture } = this.weightsMaterial;
      if (searchTexture !== null && areaTexture !== null) {
        searchTexture.dispose();
        areaTexture.dispose();
      }
      super.dispose();
    }
    /**
     * The SMAA search image, encoded as a base64 data URL.
     *
     * @type {String}
     * @deprecated
     */
    static get searchImageDataURL() {
      return searchImageDataURL_default;
    }
    /**
     * The SMAA area image, encoded as a base64 data URL.
     *
     * @type {String}
     * @deprecated
     */
    static get areaImageDataURL() {
      return areaImageDataURL_default;
    }
  };


  var import_three71 = __require("three");





  var NOISE_TEXTURE_SIZE = 64;
  var SSAOEffect = class extends Effect {
    /**
     * Constructs a new SSAO effect.
     *
     * @todo Move normalBuffer to options.
     * @param {Camera} [camera] - The main camera.
     * @param {Texture} [normalBuffer] - A texture that contains the scene normals.
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.MULTIPLY] - The blend function of this effect.
     * @param {Boolean} [options.distanceScaling=true] - Deprecated.
     * @param {Boolean} [options.depthAwareUpsampling=true] - Enables or disables depth-aware upsampling. Has no effect if WebGL 2 is not supported.
     * @param {Texture} [options.normalDepthBuffer=null] - Deprecated.
     * @param {Number} [options.samples=9] - The amount of samples per pixel. Should not be a multiple of the ring count.
     * @param {Number} [options.rings=7] - The amount of spiral turns in the occlusion sampling pattern. Should be a prime number.
     * @param {Number} [options.worldDistanceThreshold] - The world distance threshold at which the occlusion effect starts to fade out.
     * @param {Number} [options.worldDistanceFalloff] - The world distance falloff. Influences the smoothness of the occlusion cutoff.
     * @param {Number} [options.worldProximityThreshold] - The world proximity threshold at which the occlusion starts to fade out.
     * @param {Number} [options.worldProximityFalloff] - The world proximity falloff. Influences the smoothness of the proximity cutoff.
     * @param {Number} [options.distanceThreshold=0.97] - Deprecated.
     * @param {Number} [options.distanceFalloff=0.03] - Deprecated.
     * @param {Number} [options.rangeThreshold=0.0005] - Deprecated.
     * @param {Number} [options.rangeFalloff=0.001] - Deprecated.
     * @param {Number} [options.minRadiusScale=0.1] - The minimum radius scale.
     * @param {Number} [options.luminanceInfluence=0.7] - Determines how much the luminance of the scene influences the ambient occlusion.
     * @param {Number} [options.radius=0.1825] - The occlusion sampling radius, expressed as a scale relative to the resolution. Range [1e-6, 1.0].
     * @param {Number} [options.intensity=1.0] - The intensity of the ambient occlusion.
     * @param {Number} [options.bias=0.025] - An occlusion bias. Eliminates artifacts caused by depth discontinuities.
     * @param {Number} [options.fade=0.01] - Influences the smoothness of the shadows. A lower value results in higher contrast.
     * @param {Color} [options.color=null] - The color of the ambient occlusion.
     * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     */
    constructor(camera, normalBuffer, {
      blendFunction = BlendFunction.MULTIPLY,
      samples = 9,
      rings = 7,
      normalDepthBuffer = null,
      depthAwareUpsampling = true,
      worldDistanceThreshold,
      worldDistanceFalloff,
      worldProximityThreshold,
      worldProximityFalloff,
      distanceThreshold = 0.97,
      distanceFalloff = 0.03,
      rangeThreshold = 5e-4,
      rangeFalloff = 1e-3,
      minRadiusScale = 0.1,
      luminanceInfluence = 0.7,
      radius = 0.1825,
      intensity = 1,
      bias = 0.025,
      fade = 0.01,
      color: color2 = null,
      resolutionScale = 1,
      width = Resolution.AUTO_SIZE,
      height = Resolution.AUTO_SIZE,
      resolutionX = width,
      resolutionY = height
    } = {}) {
      super("SSAOEffect", ssao_default3, {
        blendFunction,
        attributes: EffectAttribute.DEPTH,
        defines: /* @__PURE__ */ new Map([
          ["THRESHOLD", "0.997"]
        ]),
        uniforms: /* @__PURE__ */ new Map([
          ["aoBuffer", new import_three71.Uniform(null)],
          ["normalDepthBuffer", new import_three71.Uniform(normalDepthBuffer)],
          ["luminanceInfluence", new import_three71.Uniform(luminanceInfluence)],
          ["color", new import_three71.Uniform(null)],
          ["intensity", new import_three71.Uniform(intensity)],
          ["scale", new import_three71.Uniform(0)]

        ])
      });
      this.renderTarget = new import_three71.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTarget.texture.name = "AO.Target";
      this.uniforms.get("aoBuffer").value = this.renderTarget.texture;
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
      this.camera = camera;
      this.depthDownsamplingPass = new DepthDownsamplingPass({ normalBuffer, resolutionScale });
      this.depthDownsamplingPass.enabled = normalDepthBuffer === null;
      this.ssaoPass = new ShaderPass(new SSAOMaterial(camera));
      const noiseTexture = new NoiseTexture(NOISE_TEXTURE_SIZE, NOISE_TEXTURE_SIZE, import_three71.RGBAFormat);
      noiseTexture.wrapS = noiseTexture.wrapT = import_three71.RepeatWrapping;
      const ssaoMaterial = this.ssaoMaterial;
      ssaoMaterial.normalBuffer = normalBuffer;
      ssaoMaterial.noiseTexture = noiseTexture;
      ssaoMaterial.minRadiusScale = minRadiusScale;
      ssaoMaterial.samples = samples;
      ssaoMaterial.radius = radius;
      ssaoMaterial.rings = rings;
      ssaoMaterial.fade = fade;
      ssaoMaterial.bias = bias;
      ssaoMaterial.distanceThreshold = distanceThreshold;
      ssaoMaterial.distanceFalloff = distanceFalloff;
      ssaoMaterial.proximityThreshold = rangeThreshold;
      ssaoMaterial.proximityFalloff = rangeFalloff;
      if (worldDistanceThreshold !== void 0) {
        ssaoMaterial.worldDistanceThreshold = worldDistanceThreshold;
      }
      if (worldDistanceFalloff !== void 0) {
        ssaoMaterial.worldDistanceFalloff = worldDistanceFalloff;
      }
      if (worldProximityThreshold !== void 0) {
        ssaoMaterial.worldProximityThreshold = worldProximityThreshold;
      }
      if (worldProximityFalloff !== void 0) {
        ssaoMaterial.worldProximityFalloff = worldProximityFalloff;
      }
      if (normalDepthBuffer !== null) {
        this.ssaoMaterial.normalDepthBuffer = normalDepthBuffer;
        this.defines.set("NORMAL_DEPTH", "1");
      }
      this.depthAwareUpsampling = depthAwareUpsampling;
      this.color = color2;
    }
    set mainCamera(value) {
      this.camera = value;
      this.ssaoMaterial.copyCameraSettings(value);
    }
    /**
     * Sets the normal buffer.
     *
     * @type {Texture}
     */
    get normalBuffer() {
      return this.ssaoMaterial.normalBuffer;
    }
    set normalBuffer(value) {
      this.ssaoMaterial.normalBuffer = value;
      this.depthDownsamplingPass.fullscreenMaterial.normalBuffer = value;
    }
    /**
     * Returns the resolution settings.
     *
     * @deprecated Use resolution instead.
     * @return {Resolution} The resolution.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * The SSAO material.
     *
     * @type {SSAOMaterial}
     */
    get ssaoMaterial() {
      return this.ssaoPass.fullscreenMaterial;
    }
    /**
     * Returns the SSAO material.
     *
     * @deprecated Use ssaoMaterial instead.
     * @return {SSAOMaterial} The material.
     */
    getSSAOMaterial() {
      return this.ssaoMaterial;
    }
    /**
     * The amount of occlusion samples per pixel.
     *
     * @type {Number}
     * @deprecated Use ssaoMaterial.samples instead.
     */
    get samples() {
      return this.ssaoMaterial.samples;
    }
    set samples(value) {
      this.ssaoMaterial.samples = value;
    }
    /**
     * The amount of spiral turns in the occlusion sampling pattern.
     *
     * @type {Number}
     * @deprecated Use ssaoMaterial.rings instead.
     */
    get rings() {
      return this.ssaoMaterial.rings;
    }
    set rings(value) {
      this.ssaoMaterial.rings = value;
    }
    /**
     * The occlusion sampling radius.
     *
     * @type {Number}
     * @deprecated Use ssaoMaterial.radius instead.
     */
    get radius() {
      return this.ssaoMaterial.radius;
    }
    set radius(value) {
      this.ssaoMaterial.radius = value;
    }
    /**
     * Indicates whether depth-aware upsampling is enabled.
     *
     * @type {Boolean}
     */
    get depthAwareUpsampling() {
      return this.defines.has("DEPTH_AWARE_UPSAMPLING");
    }
    set depthAwareUpsampling(value) {
      if (this.depthAwareUpsampling !== value) {
        if (value) {
          this.defines.set("DEPTH_AWARE_UPSAMPLING", "1");
        } else {
          this.defines.delete("DEPTH_AWARE_UPSAMPLING");
        }
        this.setChanged();
      }
    }
    /**
     * Indicates whether depth-aware upsampling is enabled.
     *
     * @deprecated Use depthAwareUpsampling instead.
     * @return {Boolean} Whether depth-aware upsampling is enabled.
     */
    isDepthAwareUpsamplingEnabled() {
      return this.depthAwareUpsampling;
    }
    /**
     * Enables or disables depth-aware upsampling.
     *
     * @deprecated Use depthAwareUpsampling instead.
     * @param {Boolean} value - Whether depth-aware upsampling should be enabled.
     */
    setDepthAwareUpsamplingEnabled(value) {
      this.depthAwareUpsampling = value;
    }
    /**
     * Indicates whether distance-based radius scaling is enabled.
     *
     * @type {Boolean}
     * @deprecated
     */
    get distanceScaling() {
      return true;
    }
    set distanceScaling(value) {
    }
    /**
     * The color of the ambient occlusion. Set to `null` to disable.
     *
     * @type {Color}
     */
    get color() {
      return this.uniforms.get("color").value;
    }
    set color(value) {
      const uniforms = this.uniforms;
      const defines = this.defines;
      if (value !== null) {
        if (defines.has("COLORIZE")) {
          uniforms.get("color").value.set(value);
        } else {
          defines.set("COLORIZE", "1");
          uniforms.get("color").value = new import_three71.Color(value);
          this.setChanged();
        }
      } else if (defines.has("COLORIZE")) {
        defines.delete("COLORIZE");
        uniforms.get("color").value = null;
        this.setChanged();
      }
    }
    /**
     * The luminance influence factor. Range: [0.0, 1.0].
     *
     * @type {Boolean}
     */
    get luminanceInfluence() {
      return this.uniforms.get("luminanceInfluence").value;
    }
    set luminanceInfluence(value) {
      this.uniforms.get("luminanceInfluence").value = value;
    }
    /**
     * The intensity.
     *
     * @type {Number}
     */
    get intensity() {
      return this.uniforms.get("intensity").value;
    }
    set intensity(value) {
      this.uniforms.get("intensity").value = value;
    }
    /**
     * Returns the color of the ambient occlusion.
     *
     * @deprecated Use color instead.
     * @return {Color} The color.
     */
    getColor() {
      return this.color;
    }
    /**
     * Sets the color of the ambient occlusion. Set to `null` to disable colorization.
     *
     * @deprecated Use color instead.
     * @param {Color} value - The color.
     */
    setColor(value) {
      this.color = value;
    }
    /**
     * Sets the occlusion distance cutoff.
     *
     * @deprecated Use ssaoMaterial instead.
     * @param {Number} threshold - The distance threshold. Range [0.0, 1.0].
     * @param {Number} falloff - The falloff. Range [0.0, 1.0].
     */
    setDistanceCutoff(threshold, falloff) {
      this.ssaoMaterial.distanceThreshold = threshold;
      this.ssaoMaterial.distanceFalloff = falloff;
    }
    /**
     * Sets the occlusion proximity cutoff.
     *
     * @deprecated Use ssaoMaterial instead.
     * @param {Number} threshold - The proximity threshold. Range [0.0, 1.0].
     * @param {Number} falloff - The falloff. Range [0.0, 1.0].
     */
    setProximityCutoff(threshold, falloff) {
      this.ssaoMaterial.proximityThreshold = threshold;
      this.ssaoMaterial.proximityFalloff = falloff;
    }
    /**
     * Sets the depth texture.
     *
     * @param {Texture} depthTexture - A depth texture.
     * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
     */
    setDepthTexture(depthTexture, depthPacking = import_three71.BasicDepthPacking) {
      this.depthDownsamplingPass.setDepthTexture(depthTexture, depthPacking);
      this.ssaoMaterial.depthBuffer = depthTexture;
      this.ssaoMaterial.depthPacking = depthPacking;
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      const renderTarget = this.renderTarget;
      if (this.depthDownsamplingPass.enabled) {
        this.depthDownsamplingPass.render(renderer);
      }
      this.ssaoPass.render(renderer, null, renderTarget);
    }
    /**
     * Sets the size.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      const w = resolution.width, h = resolution.height;
      this.ssaoMaterial.copyCameraSettings(this.camera);
      this.ssaoMaterial.setSize(w, h);
      this.renderTarget.setSize(w, h);
      this.depthDownsamplingPass.resolution.scale = resolution.scale;
      this.depthDownsamplingPass.setSize(width, height);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      try {
        let normalDepthBuffer = this.uniforms.get("normalDepthBuffer").value;
        if (normalDepthBuffer === null) {
          this.depthDownsamplingPass.initialize(renderer, alpha, frameBufferType);
          normalDepthBuffer = this.depthDownsamplingPass.texture;
          this.uniforms.get("normalDepthBuffer").value = normalDepthBuffer;
          this.ssaoMaterial.normalDepthBuffer = normalDepthBuffer;
          this.defines.set("NORMAL_DEPTH", "1");
        }
      } catch (e) {
        this.depthDownsamplingPass.enabled = false;
      }
    }
  };


  var import_three72 = __require("three");


  var texture_default = "#ifdef TEXTURE_PRECISION_HIGH\n\n	uniform mediump sampler2D map;\n\n#else\n\n	uniform lowp sampler2D map;\n\n#endif\n\nvarying vec2 vUv2;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	#ifdef UV_TRANSFORM\n\n		vec4 texel = texture2D(map, vUv2);\n\n	#else\n\n		vec4 texel = texture2D(map, uv);\n\n	#endif\n\n	outputColor = TEXEL;\n\n}\n";


  var texture_default2 = "#ifdef ASPECT_CORRECTION\n\n	uniform float scale;\n\n#else\n\n	uniform mat3 uvTransform;\n\n#endif\n\nvarying vec2 vUv2;\n\nvoid mainSupport(const in vec2 uv) {\n\n	#ifdef ASPECT_CORRECTION\n\n		vUv2 = uv * vec2(aspect, 1.0) * scale;\n\n	#else\n\n		vUv2 = (uvTransform * vec3(uv, 1.0)).xy;\n\n	#endif\n\n}\n";


  var TextureEffect = class extends Effect {
    /**
     * Constructs a new texture effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
     * @param {Texture} [options.texture] - A texture.
     * @param {Boolean} [options.aspectCorrection=false] - Deprecated. Adjust the texture's offset, repeat and center instead.
     */
    constructor({ blendFunction, texture = null, aspectCorrection = false } = {}) {
      super("TextureEffect", texture_default, {
        blendFunction,
        defines: /* @__PURE__ */ new Map([
          ["TEXEL", "texel"]
        ]),
        uniforms: /* @__PURE__ */ new Map([
          ["map", new import_three72.Uniform(null)],
          ["scale", new import_three72.Uniform(1)],
          ["uvTransform", new import_three72.Uniform(null)]
        ])
      });
      this.texture = texture;
      this.aspectCorrection = aspectCorrection;
    }
    /**
     * The texture.
     *
     * @type {Texture}
     */
    get texture() {
      return this.uniforms.get("map").value;
    }
    set texture(value) {
      const prevTexture = this.texture;
      const uniforms = this.uniforms;
      const defines = this.defines;
      if (prevTexture !== value) {
        uniforms.get("map").value = value;
        uniforms.get("uvTransform").value = value.matrix;
        defines.delete("TEXTURE_PRECISION_HIGH");
        if (value !== null) {
          if (value.matrixAutoUpdate) {
            defines.set("UV_TRANSFORM", "1");
            this.setVertexShader(texture_default2);
          } else {
            defines.delete("UV_TRANSFORM");
            this.setVertexShader(null);
          }
          if (value.type !== import_three72.UnsignedByteType) {
            defines.set("TEXTURE_PRECISION_HIGH", "1");
          }
          if (prevTexture === null || prevTexture.type !== value.type || prevTexture.encoding !== value.encoding) {
            this.setChanged();
          }
        }
      }
    }
    /**
     * Returns the texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
      return this.texture;
    }
    /**
     * Sets the texture.
     *
     * @deprecated Use texture instead.
     * @param {Texture} value - The texture.
     */
    setTexture(value) {
      this.texture = value;
    }
    /**
     * Indicates whether aspect correction is enabled.
     *
     * @type {Number}
     * @deprecated Adjust the texture's offset, repeat, rotation and center instead.
     */
    get aspectCorrection() {
      return this.defines.has("ASPECT_CORRECTION");
    }
    set aspectCorrection(value) {
      if (this.aspectCorrection !== value) {
        if (value) {
          this.defines.set("ASPECT_CORRECTION", "1");
        } else {
          this.defines.delete("ASPECT_CORRECTION");
        }
        this.setChanged();
      }
    }
    /**
     * Indicates whether the texture UV coordinates will be transformed using the transformation matrix of the texture.
     *
     * @type {Boolean}
     * @deprecated Use texture.matrixAutoUpdate instead.
     */
    get uvTransform() {
      const texture = this.texture;
      return texture !== null && texture.matrixAutoUpdate;
    }
    set uvTransform(value) {
      const texture = this.texture;
      if (texture !== null) {
        texture.matrixAutoUpdate = value;
      }
    }
    /**
     * Sets the swizzles that will be applied to the components of a texel before it is written to the output color.
     *
     * @param {ColorChannel} r - The swizzle for the `r` component.
     * @param {ColorChannel} [g=r] - The swizzle for the `g` component.
     * @param {ColorChannel} [b=r] - The swizzle for the `b` component.
     * @param {ColorChannel} [a=r] - The swizzle for the `a` component.
     */
    setTextureSwizzleRGBA(r, g = r, b = r, a = r) {
      const rgba = "rgba";
      let swizzle = "";
      if (r !== ColorChannel.RED || g !== ColorChannel.GREEN || b !== ColorChannel.BLUE || a !== ColorChannel.ALPHA) {
        swizzle = [".", rgba[r], rgba[g], rgba[b], rgba[a]].join("");
      }
      this.defines.set("TEXEL", "texel" + swizzle);
      this.setChanged();
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      if (this.texture.matrixAutoUpdate) {
        this.texture.updateMatrix();
      }
    }
  };


  var import_three73 = __require("three");


  var tilt_shift_default = "#ifdef FRAMEBUFFER_PRECISION_HIGH\n\n	uniform mediump sampler2D map;\n\n#else\n\n	uniform lowp sampler2D map;\n\n#endif\n\nuniform vec2 maskParams;\nvarying vec2 vUv2;\n\nfloat linearGradientMask(const in float x) {\n\n	return step(maskParams.x, x) - step(maskParams.y, x);\n\n}\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	float mask = linearGradientMask(vUv2.y);\n	vec4 texel = texture2D(map, uv);\n	outputColor = mix(texel, inputColor, mask);\n\n}\n";


  var tilt_shift_default2 = "uniform vec2 rotation;\nvarying vec2 vUv2;\n\nvoid mainSupport(const in vec2 uv) {\n\n	vUv2 = (uv - 0.5) * 2.0 * vec2(aspect, 1.0);\n	vUv2 = vec2(dot(rotation, vUv2), dot(rotation, vec2(vUv2.y, -vUv2.x)));\n\n}\n";


  var TiltShiftEffect = class extends Effect {
    /**
     * Constructs a new tilt shift Effect
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
     * @param {Number} [options.offset=0.0] - The relative offset of the focus area.
     * @param {Number} [options.rotation=0.0] - The rotation of the focus area in radians.
     * @param {Number} [options.focusArea=0.4] - The relative size of the focus area.
     * @param {Number} [options.feather=0.3] - The softness of the focus area edges.
     * @param {Number} [options.bias=0.06] - Deprecated.
     * @param {KernelSize} [options.kernelSize=KernelSize.MEDIUM] - The blur kernel size.
     * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     */
    constructor({
      blendFunction,
      offset = 0,
      rotation = 0,
      focusArea = 0.4,
      feather = 0.3,
      kernelSize = KernelSize.MEDIUM,
      resolutionScale = 0.5,
      resolutionX = Resolution.AUTO_SIZE,
      resolutionY = Resolution.AUTO_SIZE
    } = {}) {
      super("TiltShiftEffect", tilt_shift_default, {
        vertexShader: tilt_shift_default2,
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["rotation", new import_three73.Uniform(new import_three73.Vector2())],
          ["maskParams", new import_three73.Uniform(new import_three73.Vector2())],
          ["map", new import_three73.Uniform(null)]
        ])
      });
      this._offset = offset;
      this._focusArea = focusArea;
      this._feather = feather;
      this.renderTarget = new import_three73.WebGLRenderTarget(1, 1, { depthBuffer: false });
      this.renderTarget.texture.name = "TiltShift.Target";
      this.uniforms.get("map").value = this.renderTarget.texture;
      this.blurPass = new TiltShiftBlurPass({
        kernelSize,
        resolutionScale,
        resolutionX,
        resolutionY,
        offset,
        rotation,
        focusArea,
        feather
      });
      const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
      resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
      this.rotation = rotation;
      this.updateParams();
    }
    /**
     * Updates the mask params.
     *
     * @private
     */
    updateParams() {
      const params = this.uniforms.get("maskParams").value;
      const x = Math.max(this.focusArea - this.feather, 0);
      params.set(this.offset - x, this.offset + x);
    }
    /**
     * The rotation of the focus area in radians.
     *
     * @type {Number}
     */
    get rotation() {
      return Math.acos(this.uniforms.get("rotation").value.x);
    }
    set rotation(value) {
      this.uniforms.get("rotation").value.set(Math.cos(value), Math.sin(value));
      this.blurPass.blurMaterial.rotation = value;
    }
    /**
     * The relative offset of the focus area.
     *
     * @type {Number}
     */
    get offset() {
      return this._offset;
    }
    set offset(value) {
      this._offset = value;
      this.blurPass.blurMaterial.offset = value;
      this.updateParams();
    }
    /**
     * The relative size of the focus area.
     *
     * @type {Number}
     */
    get focusArea() {
      return this._focusArea;
    }
    set focusArea(value) {
      this._focusArea = value;
      this.blurPass.blurMaterial.focusArea = value;
      this.updateParams();
    }
    /**
     * The softness of the focus area edges.
     *
     * @type {Number}
     */
    get feather() {
      return this._feather;
    }
    set feather(value) {
      this._feather = value;
      this.blurPass.blurMaterial.feather = value;
      this.updateParams();
    }
    /**
     * A blend bias.
     *
     * @type {Number}
     * @deprecated
     */
    get bias() {
      return 0;
    }
    set bias(value) {
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      this.blurPass.render(renderer, inputBuffer, this.renderTarget);
    }
    /**
     * Updates the size of internal render targets.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
      const resolution = this.resolution;
      resolution.setBaseSize(width, height);
      this.renderTarget.setSize(resolution.width, resolution.height);
      this.blurPass.resolution.copy(resolution);
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      this.blurPass.initialize(renderer, alpha, frameBufferType);
      if (frameBufferType !== void 0) {
        this.renderTarget.texture.type = frameBufferType;
        if (getOutputColorSpace(renderer) === SRGBColorSpace) {
          setTextureColorSpace(this.renderTarget.texture, SRGBColorSpace);
        }
      }
    }
  };


  var import_three74 = __require("three");





  var ToneMappingEffect = class extends Effect {
    /**
     * Constructs a new tone mapping effect.
     *
     * The additional parameters only affect the Reinhard2 operator.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction=BlendFunction.SRC] - The blend function of this effect.
     * @param {Boolean} [options.adaptive=false] - Deprecated. Use mode instead.
     * @param {ToneMappingMode} [options.mode=ToneMappingMode.ACES_FILMIC] - The tone mapping mode.
     * @param {Number} [options.resolution=256] - The resolution of the luminance texture. Must be a power of two.
     * @param {Number} [options.maxLuminance=4.0] - Deprecated. Same as whitePoint.
     * @param {Number} [options.whitePoint=4.0] - The white point.
     * @param {Number} [options.middleGrey=0.6] - The middle grey factor.
     * @param {Number} [options.minLuminance=0.01] - The minimum luminance. Prevents very high exposure in dark scenes.
     * @param {Number} [options.averageLuminance=1.0] - The average luminance. Used for the non-adaptive Reinhard operator.
     * @param {Number} [options.adaptationRate=1.0] - The luminance adaptation rate.
     */
    constructor({
      blendFunction = BlendFunction.SRC,
      adaptive = false,
      mode = adaptive ? ToneMappingMode.REINHARD2_ADAPTIVE : ToneMappingMode.ACES_FILMIC,
      resolution = 256,
      maxLuminance = 4,
      whitePoint = maxLuminance,
      middleGrey = 0.6,
      minLuminance = 0.01,
      averageLuminance = 1,
      adaptationRate = 1
    } = {}) {
      super("ToneMappingEffect", tone_mapping_default, {
        blendFunction,
        uniforms: /* @__PURE__ */ new Map([
          ["luminanceBuffer", new import_three74.Uniform(null)],
          ["maxLuminance", new import_three74.Uniform(maxLuminance)],

          ["whitePoint", new import_three74.Uniform(whitePoint)],
          ["middleGrey", new import_three74.Uniform(middleGrey)],
          ["averageLuminance", new import_three74.Uniform(averageLuminance)]
        ])
      });
      this.renderTargetLuminance = new import_three74.WebGLRenderTarget(1, 1, {
        minFilter: import_three74.LinearMipmapLinearFilter,
        depthBuffer: false
      });
      this.renderTargetLuminance.texture.generateMipmaps = true;
      this.renderTargetLuminance.texture.name = "Luminance";
      this.luminancePass = new LuminancePass({
        renderTarget: this.renderTargetLuminance
      });
      this.adaptiveLuminancePass = new AdaptiveLuminancePass(this.luminancePass.texture, {
        minLuminance,
        adaptationRate
      });
      this.uniforms.get("luminanceBuffer").value = this.adaptiveLuminancePass.texture;
      this.resolution = resolution;
      this.mode = mode;
    }
    /**
     * The tone mapping mode.
     *
     * @type {ToneMappingMode}
     */
    get mode() {
      return Number(this.defines.get("TONE_MAPPING_MODE"));
    }
    set mode(value) {
      if (this.mode !== value) {
        this.defines.clear();
        this.defines.set("TONE_MAPPING_MODE", value.toFixed(0));
        switch (value) {
          case ToneMappingMode.REINHARD:
            this.defines.set("toneMapping(texel)", "ReinhardToneMapping(texel)");
            break;
          case ToneMappingMode.OPTIMIZED_CINEON:
            this.defines.set("toneMapping(texel)", "OptimizedCineonToneMapping(texel)");
            break;
          case ToneMappingMode.ACES_FILMIC:
            this.defines.set("toneMapping(texel)", "ACESFilmicToneMapping(texel)");
            break;
          default:
            this.defines.set("toneMapping(texel)", "texel");
            break;
        }
        this.adaptiveLuminancePass.enabled = value === ToneMappingMode.REINHARD2_ADAPTIVE;
        this.setChanged();
      }
    }
    /**
     * Returns the current tone mapping mode.
     *
     * @deprecated Use mode instead.
     * @return {ToneMappingMode} The tone mapping mode.
     */
    getMode() {
      return this.mode;
    }
    /**
     * Sets the tone mapping mode.
     *
     * @deprecated Use mode instead.
     * @param {ToneMappingMode} value - The tone mapping mode.
     */
    setMode(value) {
      this.mode = value;
    }
    /**
     * The white point. Default is `4.0`.
     *
     * Only applies to Reinhard2 (Modified & Adaptive).
     *
     * @type {Number}
     */
    get whitePoint() {
      return this.uniforms.get("whitePoint").value;
    }
    set whitePoint(value) {
      this.uniforms.get("whitePoint").value = value;
    }
    /**
     * The middle grey factor. Default is `0.6`.
     *
     * Only applies to Reinhard2 (Modified & Adaptive).
     *
     * @type {Number}
     */
    get middleGrey() {
      return this.uniforms.get("middleGrey").value;
    }
    set middleGrey(value) {
      this.uniforms.get("middleGrey").value = value;
    }
    /**
     * The average luminance.
     *
     * Only applies to Reinhard2 (Modified).
     *
     * @type {Number}
     */
    get averageLuminance() {
      return this.uniforms.get("averageLuminance").value;
    }
    set averageLuminance(value) {
      this.uniforms.get("averageLuminance").value = value;
    }
    /**
     * The adaptive luminance material.
     *
     * @type {AdaptiveLuminanceMaterial}
     */
    get adaptiveLuminanceMaterial() {
      return this.adaptiveLuminancePass.fullscreenMaterial;
    }
    /**
     * Returns the adaptive luminance material.
     *
     * @deprecated Use adaptiveLuminanceMaterial instead.
     * @return {AdaptiveLuminanceMaterial} The material.
     */
    getAdaptiveLuminanceMaterial() {
      return this.adaptiveLuminanceMaterial;
    }
    /**
     * The resolution of the luminance texture. Must be a power of two.
     *
     * @type {Number}
     */
    get resolution() {
      return this.luminancePass.resolution.width;
    }
    set resolution(value) {
      const exponent = Math.max(0, Math.ceil(Math.log2(value)));
      const size = Math.pow(2, exponent);
      this.luminancePass.resolution.setPreferredSize(size, size);
      this.adaptiveLuminanceMaterial.mipLevel1x1 = exponent;
    }
    /**
     * Returns the resolution of the luminance texture.
     *
     * @deprecated Use resolution instead.
     * @return {Number} The resolution.
     */
    getResolution() {
      return this.resolution;
    }
    /**
     * Sets the resolution of the luminance texture. Must be a power of two.
     *
     * @deprecated Use resolution instead.
     * @param {Number} value - The resolution.
     */
    setResolution(value) {
      this.resolution = value;
    }
    /**
     * Indicates whether this pass uses adaptive luminance.
     *
     * @type {Boolean}
     * @deprecated Use mode instead.
     */
    get adaptive() {
      return this.mode === ToneMappingMode.REINHARD2_ADAPTIVE;
    }
    set adaptive(value) {
      this.mode = value ? ToneMappingMode.REINHARD2_ADAPTIVE : ToneMappingMode.REINHARD2;
    }
    /**
     * The luminance adaptation rate.
     *
     * @type {Number}
     * @deprecated Use adaptiveLuminanceMaterial.adaptationRate instead.
     */
    get adaptationRate() {
      return this.adaptiveLuminanceMaterial.adaptationRate;
    }
    set adaptationRate(value) {
      this.adaptiveLuminanceMaterial.adaptationRate = value;
    }
    /**
     * @type {Number}
     * @deprecated
     */
    get distinction() {
      console.warn(this.name, "distinction was removed.");
      return 1;
    }
    set distinction(value) {
      console.warn(this.name, "distinction was removed.");
    }
    /**
     * Updates this effect.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     */
    update(renderer, inputBuffer, deltaTime) {
      if (this.adaptiveLuminancePass.enabled) {
        this.luminancePass.render(renderer, inputBuffer);
        this.adaptiveLuminancePass.render(renderer, null, null, deltaTime);
      }
    }
    /**
     * Performs initialization tasks.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
     * @param {Number} frameBufferType - The type of the main frame buffers.
     */
    initialize(renderer, alpha, frameBufferType) {
      this.adaptiveLuminancePass.initialize(renderer, alpha, frameBufferType);
    }
  };


  var import_three75 = __require("three");


  var vignette_default = "uniform float offset;\nuniform float darkness;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n	const vec2 center = vec2(0.5);\n	vec3 color = inputColor.rgb;\n\n	#if VIGNETTE_TECHNIQUE == 0\n\n		float d = distance(uv, center);\n		color *= smoothstep(0.8, offset * 0.799, d * (darkness + offset));\n\n	#else\n\n		vec2 coord = (uv - center) * vec2(offset);\n		color = mix(color, vec3(1.0 - darkness), dot(coord, coord));\n\n	#endif\n\n	outputColor = vec4(color, inputColor.a);\n\n}\n";


  var VignetteEffect = class extends Effect {
    /**
     * Constructs a new Vignette effect.
     *
     * @param {Object} [options] - The options.
     * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
     * @param {VignetteTechnique} [options.technique=VignetteTechnique.DEFAULT] - The Vignette technique.
     * @param {Boolean} [options.eskil=false] - Deprecated. Use technique instead.
     * @param {Number} [options.offset=0.5] - The Vignette offset.
     * @param {Number} [options.darkness=0.5] - The Vignette darkness.
     */
    constructor({
      blendFunction,
      technique = VignetteTechnique.DEFAULT,
      eskil = false,
      offset = 0.5,
      darkness = 0.5
    } = {}) {
      super("VignetteEffect", vignette_default, {
        blendFunction,
        defines: /* @__PURE__ */ new Map([
          ["VIGNETTE_TECHNIQUE", technique.toFixed(0)]
        ]),
        uniforms: /* @__PURE__ */ new Map([
          ["offset", new import_three75.Uniform(offset)],
          ["darkness", new import_three75.Uniform(darkness)]
        ])
      });
    }
    /**
     * The Vignette technique.
     *
     * @type {VignetteTechnique}
     */
    get technique() {
      return Number(this.defines.get("VIGNETTE_TECHNIQUE"));
    }
    set technique(value) {
      if (this.technique !== value) {
        this.defines.set("VIGNETTE_TECHNIQUE", value.toFixed(0));
        this.setChanged();
      }
    }
    /**
     * Indicates whether Eskil's Vignette technique is enabled.
     *
     * @type {Boolean}
     * @deprecated Use technique instead.
     */
    get eskil() {
      return this.technique === VignetteTechnique.ESKIL;
    }
    /**
     * Indicates whether Eskil's Vignette technique is enabled.
     *
     * @type {Boolean}
     * @deprecated Use technique instead.
     */
    set eskil(value) {
      this.technique = value ? VignetteTechnique.ESKIL : VignetteTechnique.DEFAULT;
    }
    /**
     * Returns the Vignette technique.
     *
     * @deprecated Use technique instead.
     * @return {VignetteTechnique} The technique.
     */
    getTechnique() {
      return this.technique;
    }
    /**
     * Sets the Vignette technique.
     *
     * @deprecated Use technique instead.
     * @param {VignetteTechnique} value - The technique.
     */
    setTechnique(value) {
      this.technique = value;
    }
    /**
     * The Vignette offset.
     *
     * @type {Number}
     */
    get offset() {
      return this.uniforms.get("offset").value;
    }
    set offset(value) {
      this.uniforms.get("offset").value = value;
    }
    /**
     * Returns the Vignette offset.
     *
     * @deprecated Use offset instead.
     * @return {Number} The offset.
     */
    getOffset() {
      return this.offset;
    }
    /**
     * Sets the Vignette offset.
     *
     * @deprecated Use offset instead.
     * @param {Number} value - The offset.
     */
    setOffset(value) {
      this.offset = value;
    }
    /**
     * The Vignette darkness.
     *
     * @type {Number}
     */
    get darkness() {
      return this.uniforms.get("darkness").value;
    }
    set darkness(value) {
      this.uniforms.get("darkness").value = value;
    }
    /**
     * Returns the Vignette darkness.
     *
     * @deprecated Use darkness instead.
     * @return {Number} The darkness.
     */
    getDarkness() {
      return this.darkness;
    }
    /**
     * Sets the Vignette darkness.
     *
     * @deprecated Use darkness instead.
     * @param {Number} value - The darkness.
     */
    setDarkness(value) {
      this.darkness = value;
    }
  };


  var import_three76 = __require("three");
  var LUT3dlLoader = class extends import_three76.Loader {
    /**
     * Loads a LUT.
     *
     * @param {String} url - The URL of the 3dl-file.
     * @param {Function} [onLoad] - A callback that receives the loaded lookup texture.
     * @param {Function} [onProgress] - A progress callback that receives the XMLHttpRequest instance.
     * @param {Function} [onError] - An error callback that receives the URL of the file that failed to load.
     * @return {Promise<LookupTexture>} A promise that returns the lookup texture.
     */
    load(url, onLoad = () => {
    }, onProgress = () => {
    }, onError = null) {
      const externalManager = this.manager;
      const internalManager = new import_three76.LoadingManager();
      const loader = new import_three76.FileLoader(internalManager);
      loader.setPath(this.path);
      loader.setResponseType("text");
      return new Promise((resolve, reject) => {
        internalManager.onError = (url2) => {
          externalManager.itemError(url2);
          if (onError !== null) {
            onError(`Failed to load ${url2}`);
            resolve();
          } else {
            reject(`Failed to load ${url2}`);
          }
        };
        externalManager.itemStart(url);
        loader.load(url, (data) => {
          try {
            const result = this.parse(data);
            externalManager.itemEnd(url);
            onLoad(result);
            resolve(result);
          } catch (e) {
            console.error(e);
            internalManager.onError(url);
          }
        }, onProgress);
      });
    }
    /**
     * Parses the given data.
     *
     * @param {String} input - The LUT data.
     * @return {LookupTexture} The lookup texture.
     * @throws {Error} Fails if the data is invalid.
     */
    parse(input) {
      const regExpGridInfo = /^[\d ]+$/m;
      const regExpDataPoints = /^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;
      let result = regExpGridInfo.exec(input);
      if (result === null) {
        throw new Error("Missing grid information");
      }
      const gridLines = result[0].trim().split(/\s+/g).map((n) => Number(n));
      const gridStep = gridLines[1] - gridLines[0];
      const size = gridLines.length;
      const sizeSq = size ** 2;
      for (let i = 1, l = gridLines.length; i < l; ++i) {
        if (gridStep !== gridLines[i] - gridLines[i - 1]) {
          throw new Error("Inconsistent grid size");
        }
      }
      const data = new Float32Array(size ** 3 * 4);
      let maxValue = 0;
      let index = 0;
      while ((result = regExpDataPoints.exec(input)) !== null) {
        const r = Number(result[1]);
        const g = Number(result[2]);
        const b = Number(result[3]);
        maxValue = Math.max(maxValue, r, g, b);
        const bLayer = index % size;
        const gLayer = Math.floor(index / size) % size;
        const rLayer = Math.floor(index / sizeSq) % size;
        const d4 = (bLayer * sizeSq + gLayer * size + rLayer) * 4;
        data[d4 + 0] = r;
        data[d4 + 1] = g;
        data[d4 + 2] = b;
        data[d4 + 3] = 1;
        ++index;
      }
      const bits = Math.ceil(Math.log2(maxValue));
      const maxBitValue = Math.pow(2, bits);
      for (let i = 0, l = data.length; i < l; i += 4) {
        data[i + 0] /= maxBitValue;
        data[i + 1] /= maxBitValue;
        data[i + 2] /= maxBitValue;
      }
      return new LookupTexture(data, size);
    }
  };


  var import_three77 = __require("three");
  var LUTCubeLoader = class extends import_three77.Loader {
    /**
     * Loads a LUT.
     *
     * @param {String} url - The URL of the CUBE-file.
     * @param {Function} [onLoad] - A callback that receives the loaded lookup texture.
     * @param {Function} [onProgress] - A progress callback that receives the XMLHttpRequest instance.
     * @param {Function} [onError] - An error callback that receives the URL of the file that failed to load.
     * @return {Promise<LookupTexture>} A promise that returns the lookup texture.
     */
    load(url, onLoad = () => {
    }, onProgress = () => {
    }, onError = null) {
      const externalManager = this.manager;
      const internalManager = new import_three77.LoadingManager();
      const loader = new import_three77.FileLoader(internalManager);
      loader.setPath(this.path);
      loader.setResponseType("text");
      return new Promise((resolve, reject) => {
        internalManager.onError = (url2) => {
          externalManager.itemError(url2);
          if (onError !== null) {
            onError(`Failed to load ${url2}`);
            resolve();
          } else {
            reject(`Failed to load ${url2}`);
          }
        };
        externalManager.itemStart(url);
        loader.load(url, (data) => {
          try {
            const result = this.parse(data);
            externalManager.itemEnd(url);
            onLoad(result);
            resolve(result);
          } catch (e) {
            console.error(e);
            internalManager.onError(url);
          }
        }, onProgress);
      });
    }
    /**
     * Parses the given data.
     *
     * @param {String} input - The LUT data.
     * @return {LookupTexture} The lookup texture.
     * @throws {Error} Fails if the data is invalid.
     */
    parse(input) {
      const regExpTitle = /TITLE +"([^"]*)"/;
      const regExpSize = /LUT_3D_SIZE +(\d+)/;
      const regExpDomainMin = /DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/;
      const regExpDomainMax = /DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/;
      const regExpDataPoints = /^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;
      let result = regExpTitle.exec(input);
      const title = result !== null ? result[1] : null;
      result = regExpSize.exec(input);
      if (result === null) {
        throw new Error("Missing LUT_3D_SIZE information");
      }
      const size = Number(result[1]);
      const data = new Float32Array(size ** 3 * 4);
      const domainMin = new import_three77.Vector3(0, 0, 0);
      const domainMax = new import_three77.Vector3(1, 1, 1);
      result = regExpDomainMin.exec(input);
      if (result !== null) {
        domainMin.set(Number(result[1]), Number(result[2]), Number(result[3]));
      }
      result = regExpDomainMax.exec(input);
      if (result !== null) {
        domainMax.set(Number(result[1]), Number(result[2]), Number(result[3]));
      }
      if (domainMin.x > domainMax.x || domainMin.y > domainMax.y || domainMin.z > domainMax.z) {
        domainMin.set(0, 0, 0);
        domainMax.set(1, 1, 1);
        throw new Error("Invalid input domain");
      }
      let i = 0;
      while ((result = regExpDataPoints.exec(input)) !== null) {
        data[i++] = Number(result[1]);
        data[i++] = Number(result[2]);
        data[i++] = Number(result[3]);
        data[i++] = 1;
      }
      const lut = new LookupTexture(data, size);
      lut.domainMin.copy(domainMin);
      lut.domainMax.copy(domainMax);
      if (title !== null) {
        lut.name = title;
      }
      return lut;
    }
  };


  var import_three78 = __require("three");
  var SMAAImageLoader = class extends import_three78.Loader {
    /**
     * Loads the SMAA data images.
     *
     * @param {Function} [onLoad] - A callback that receives the search image and area image as a pair.
     * @param {Function} [onError] - An error callback that receives the URL of the image that failed to load.
     * @return {Promise<Image[]>} A promise that returns the search image and area image as a pair.
     */
    load(onLoad = () => {
    }, onError = null) {
      if (arguments.length === 4) {
        onLoad = arguments[1];
        onError = arguments[3];
      } else if (arguments.length === 3 || typeof arguments[0] !== "function") {
        onLoad = arguments[1];
        onError = null;
      }
      const externalManager = this.manager;
      const internalManager = new import_three78.LoadingManager();
      return new Promise((resolve, reject) => {
        const searchImage = new Image();
        const areaImage = new Image();
        internalManager.onError = (url) => {
          externalManager.itemError(url);
          if (onError !== null) {
            onError(`Failed to load ${url}`);
            resolve();
          } else {
            reject(`Failed to load ${url}`);
          }
        };
        internalManager.onLoad = () => {
          const result = [searchImage, areaImage];
          onLoad(result);
          resolve(result);
        };
        searchImage.addEventListener("error", (e) => {
          internalManager.itemError("smaa-search");
        });
        areaImage.addEventListener("error", (e) => {
          internalManager.itemError("smaa-area");
        });
        searchImage.addEventListener("load", () => {
          externalManager.itemEnd("smaa-search");
          internalManager.itemEnd("smaa-search");
        });
        areaImage.addEventListener("load", () => {
          externalManager.itemEnd("smaa-area");
          internalManager.itemEnd("smaa-area");
        });
        externalManager.itemStart("smaa-search");
        externalManager.itemStart("smaa-area");
        internalManager.itemStart("smaa-search");
        internalManager.itemStart("smaa-area");
        searchImage.src = searchImageDataURL_default;
        areaImage.src = areaImageDataURL_default;
      });
    }
  };
  return __toCommonJS(src_exports);
})();
if(typeof module==="object"&&module.exports)module.exports=POSTPROCESSING;
