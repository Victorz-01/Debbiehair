const products = [
    {
        id: 1,
        name: "Luxury Lace Front Wig",
        category: "wigs",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop",
        description: "Premium human hair lace front wig with natural hairline and baby hairs.",
        featured: true,
        features: [
            "100% human hair",
            "HD lace front for natural hairline",
            "Pre-plucked with baby hairs",
            "Heat resistant up to 180°C",
            "Available in multiple colors"
        ],
        careTips: [
            "Wash with sulfate-free shampoo",
            "Use wide-tooth comb when detangling",
            "Store on wig stand when not in use",
            "Avoid excessive heat styling"
        ],
        upsell: "Pair with our Wig Care Kit and Silk Bonnet for optimal maintenance and longevity."
    },
    {
        id: 2,
        name: "Curly Bob Wig",
        category: "wigs",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop",
        description: "Chic curly bob wig with natural bounce and volume, perfect for any occasion.",
        featured: false,
        features: [
            "Virgin human hair",
            "Swiss lace construction",
            "Pre-styled curly texture",
            "Adjustable straps for secure fit",
            "12-inch length"
        ],
        careTips: [
            "Finger detangle to maintain curl pattern",
            "Deep condition weekly",
            "Air dry when possible",
            "Use curl-defining products"
        ],
        upsell: "Complete your look with our Curl Refresher Spray and Edge Control for perfect finishing touches."
    },
    {
        id: 3,
        name: "Straight Blonde Wig",
        category: "wigs",
        price: 279.99,
        image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&h=600&fit=crop",
        description: "Sleek blonde wig with silky straight texture and natural shine.",
        featured: false,
        features: [
            "Premium Remy human hair",
            "Transparent lace",
            "613 blonde color",
            "Can be dyed darker",
            "16-inch length"
        ],
        careTips: [
            "Use purple shampoo to maintain blonde tone",
            "Apply heat protectant before styling",
            "Deep condition twice weekly",
            "Avoid chlorinated water"
        ],
        upsell: "Enhance shine with our Argan Oil Serum and maintain color with Purple Toning Shampoo."
    },
    {
        id: 4,
        name: "Natural Wave Wig",
        category: "wigs",
        price: 319.99,
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=600&fit=crop",
        description: "Gorgeous natural wave pattern wig with body and movement.",
        featured: true,
        features: [
            "100% virgin human hair",
            "Natural wave texture",
            "HD transparent lace",
            "Pre-bleached knots",
            "18-inch length"
        ],
        careTips: [
            "Scrunch with mousse to enhance waves",
            "Avoid over-brushing",
            "Use satin pillowcase",
            "Refresh waves with water spray"
        ],
        upsell: "Maintain beautiful waves with our Wave Defining Mousse and Hydrating Leave-In Conditioner."
    },
    {
        id: 5,
        name: "Clip-In Hair Extensions",
        category: "extensions",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop",
        description: "Instant length and volume with our premium clip-in extensions.",
        featured: false,
        features: [
            "7-piece set",
            "Human hair blend",
            "Easy clip application",
            "Matches most hair colors",
            "20-inch length"
        ],
        careTips: [
            "Remove before sleeping",
            "Wash every 15-20 wears",
            "Store in original packaging",
            "Clip from bottom to top for secure hold"
        ],
        upsell: "Achieve seamless blending with our Extension Blending Brush and Color-Matching Service."
    },
    {
        id: 6,
        name: "Tape-In Extensions",
        category: "extensions",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop",
        description: "Seamless tape-in extensions for a natural, long-lasting look.",
        featured: true,
        features: [
            "20 pieces per pack",
            "Remy human hair",
            "Medical-grade adhesive",
            "Reusable up to 3 times",
            "18-inch length"
        ],
        careTips: [
            "Wait 48 hours before washing after application",
            "Use sulfate-free, oil-free products",
            "Avoid conditioner on tape areas",
            "Professional removal recommended"
        ],
        upsell: "Extend wear time with our Tape-In Extension Maintenance Kit including replacement tapes."
    },
    {
        id: 7,
        name: "Ponytail Extension",
        category: "extensions",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&h=600&fit=crop",
        description: "Instant glamorous ponytail with natural-looking wrap-around design.",
        featured: false,
        features: [
            "Wrap-around velcro attachment",
            "Natural hair texture",
            "Heat resistant",
            "Multiple color options",
            "22-inch length"
        ],
        careTips: [
            "Secure natural hair in ponytail first",
            "Wrap extension around base",
            "Use bobby pins for extra security",
            "Store hanging to prevent tangling"
        ],
        upsell: "Style perfectly with our Ponytail Styling Gel and Add texture with our Texturizing Spray."
    },
    {
        id: 8,
        name: "Halo Hair Extension",
        category: "extensions",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop",
        description: "No-damage halo extension sits comfortably with invisible wire.",
        featured: false,
        features: [
            "Single weft design",
            "Invisible wire attachment",
            "No clips or glue needed",
            "Adjustable sizing",
            "16-inch length"
        ],
        careTips: [
            "Place wire on crown of head",
            "Cover wire with natural hair",
            "Adjust tension for comfort",
            "Hand wash gently"
        ],
        upsell: "Blend seamlessly with our Root Touch-Up Spray and Volumizing Powder for natural coverage."
    },
    {
        id: 9,
        name: "Silk Bonnet",
        category: "accessories",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop",
        description: "Protect your hair and wigs while sleeping with our premium silk bonnet.",
        featured: false,
        features: [
            "100% mulberry silk",
            "Elastic band for secure fit",
            "Prevents frizz and breakage",
            "Multiple colors available",
            "Machine washable"
        ],
        careTips: [
            "Wash in cold water on delicate cycle",
            "Air dry only",
            "Store in cool, dry place",
            "Replace every 6-12 months"
        ],
        upsell: "Pair with our Silk Pillowcase for complete overnight hair protection."
    },
    {
        id: 10,
        name: "Wig Stand",
        category: "accessories",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1598662779094-bc242e6c0148?w=600&h=600&fit=crop",
        description: "Sturdy wig stand to maintain wig shape and style when not in use.",
        featured: false,
        features: [
            "Collapsible design",
            "Non-slip base",
            "Adjustable height",
            "Durable plastic construction",
            "Holds all wig types"
        ],
        careTips: [
            "Wipe clean with damp cloth",
            "Adjust to match wig cap size",
            "Store in stable location",
            "Use for styling and drying"
        ],
        upsell: "Organize multiple wigs with our Wig Storage Bag and keep them dust-free."
    },
    {
        id: 11,
        name: "Edge Control Gel",
        category: "accessories",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1556228841-1a7b3e8c0c35?w=600&h=600&fit=crop",
        description: "Strong hold edge control for sleek, smooth edges and baby hairs.",
        featured: false,
        features: [
            "24-hour hold",
            "Non-flaking formula",
            "Adds shine",
            "Contains natural oils",
            "4oz container"
        ],
        careTips: [
            "Apply to damp edges",
            "Use boar bristle brush for smoothing",
            "Tie down with scarf for 10 minutes",
            "Remove excess product before styling"
        ],
        upsell: "Achieve perfect edges with our Edge Brush Kit including mini boar bristle brush and comb."
    },
    {
        id: 12,
        name: "Wig Grip Band",
        category: "accessories",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1509319117263-e8361e8b26e9?w=600&h=600&fit=crop",
        description: "Comfortable adjustable wig grip band for secure wig placement.",
        featured: false,
        features: [
            "Velvet material",
            "Adjustable velcro closure",
            "Prevents wig slipping",
            "Protects natural hair",
            "One size fits most"
        ],
        careTips: [
            "Hand wash with mild soap",
            "Air dry completely",
            "Adjust for snug but comfortable fit",
            "Replace when elastic stretches"
        ],
        upsell: "Complete your wig essentials with our Wig Cap Set in multiple colors for natural blending."
    },
    {
        id: 13,
        name: "Professional Wig Care Kit",
        category: "care",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1556228852-80c3b8de4d9b?w=600&h=600&fit=crop",
        description: "Complete care kit with everything needed to maintain your wigs and extensions.",
        featured: true,
        features: [
            "Sulfate-free shampoo",
            "Deep conditioner",
            "Leave-in spray",
            "Wide-tooth comb",
            "Storage bag included"
        ],
        careTips: [
            "Use products in order: shampoo, conditioner, leave-in",
            "Follow individual product instructions",
            "Store kit in cool, dry place",
            "Replace products every 3-6 months"
        ],
        upsell: "Extend the life of your investment with our Professional Detangling Brush and Heat Protectant Spray."
    },
    {
        id: 14,
        name: "Argan Oil Hair Serum",
        category: "care",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&h=600&fit=crop",
        description: "Nourishing argan oil serum for shine, softness, and frizz control.",
        featured: false,
        features: [
            "100% pure argan oil",
            "Lightweight formula",
            "Adds instant shine",
            "Controls frizz",
            "2oz bottle"
        ],
        careTips: [
            "Apply to damp or dry hair",
            "Use 2-3 drops for medium length",
            "Avoid scalp and roots",
            "Can be used on wigs and extensions"
        ],
        upsell: "Maximize hair health with our Complete Oil Collection including coconut and jojoba oils."
    },
    {
        id: 15,
        name: "Purple Toning Shampoo",
        category: "care",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&h=600&fit=crop",
        description: "Neutralizes brassy tones in blonde and gray wigs and extensions.",
        featured: false,
        features: [
            "Purple pigment formula",
            "Sulfate-free",
            "Moisturizing agents",
            "Safe for human hair wigs",
            "8oz bottle"
        ],
        careTips: [
            "Use once weekly or as needed",
            "Leave on for 3-5 minutes",
            "Follow with conditioner",
            "Wear gloves to prevent staining"
        ],
        upsell: "Maintain bright blondes with our Purple Conditioner and Blonde Brightening Mask duo."
    },
    {
        id: 16,
        name: "Heat Protectant Spray",
        category: "care",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=600&h=600&fit=crop",
        description: "Shield hair from heat damage during styling with this essential spray.",
        featured: false,
        features: [
            "Protects up to 230°C",
            "Non-greasy formula",
            "Adds light hold",
            "Pleasant fragrance",
            "6oz spray bottle"
        ],
        careTips: [
            "Spray on damp hair before blow-drying",
            "Hold 6 inches from hair",
            "Apply before flat iron or curling",
            "Use every time you heat style"
        ],
        upsell: "Achieve salon results with our Thermal Styling Set including heat tools and protectants."
    }
];

window.productsData = products;
