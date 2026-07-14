export interface Translation {
  en: string;
  ar: string;
}

export interface MonthData {
  month: Translation;
  revenue: number;
}

export interface UnitRevenue {
  id: string;
  total: number;
}

export interface MonthOccupancy {
  month: Translation;
  occ: number;
}

export interface UnitOccupancy {
  id: string;
  avg: number;
}

export interface ExpenseItem {
  label: Translation;
  amount: number;
}

export interface UnitItem {
  id: string;
  occupied: boolean;
}

export interface FloorItem {
  name: Translation;
  units: UnitItem[];
}

export interface ChallengeItem {
  id: number;
  title: Translation;
  desc: Translation;
  opportunity: Translation;
  type: "improvement" | "operational" | "regulatory" | "external";
}

export interface ComparisonItem {
  item: Translation;
  current: Translation;
  proposed: Translation;
}

// Key financial constants based on PDF
export const xT = 1712462; // Total Actual Revenue (21-05-2025 Till 30-06-2026)
export const Dre = 251500; // Benchmark Monthly Revenue
export const forecastRevenue6M = 950000; // Forecast 6 Months (1-7-2026 Till 31-12-2026)

export const _b: MonthData[] = [
  {
    "month": {
      "en": "Jun 25",
      "ar": "يون 25"
    },
    "revenue": 9156
  },
  {
    "month": {
      "en": "Jul 25",
      "ar": "يول 25"
    },
    "revenue": 40818
  },
  {
    "month": {
      "en": "Aug 25",
      "ar": "أغس 25"
    },
    "revenue": 106329
  },
  {
    "month": {
      "en": "Sep 25",
      "ar": "سبت 25"
    },
    "revenue": 160149
  },
  {
    "month": {
      "en": "Oct 25",
      "ar": "أكت 25"
    },
    "revenue": 166745
  },
  {
    "month": {
      "en": "Nov 25",
      "ar": "نوف 25"
    },
    "revenue": 184091
  },
  {
    "month": {
      "en": "Dec 25",
      "ar": "ديس 25"
    },
    "revenue": 179453
  },
  {
    "month": {
      "en": "Jan 26",
      "ar": "يني 26"
    },
    "revenue": 163467
  },
  {
    "month": {
      "en": "Feb 26",
      "ar": "فبر 26"
    },
    "revenue": 141356
  },
  {
    "month": {
      "en": "Mar 26",
      "ar": "مار 26"
    },
    "revenue": 128406.89
  },
  {
    "month": {
      "en": "Apr 26",
      "ar": "أبر 26"
    },
    "revenue": 138450
  },
  {
    "month": {
      "en": "May 26",
      "ar": "مايو 26"
    },
    "revenue": 142680
  },
  {
    "month": {
      "en": "Jun 26",
      "ar": "يونيو 26"
    },
    "revenue": 151362.11
  }
];

export const yT: UnitRevenue[] = [
  { "id": "13-1003", "total": 83000 },
  { "id": "13-1026", "total": 80637 },
  { "id": "13-1021", "total": 74200 },
  { "id": "13-1033", "total": 74016 },
  { "id": "13-1032", "total": 72472 },
  { "id": "13-1004", "total": 72408 },
  { "id": "13-1017", "total": 70046 },
  { "id": "13-1020", "total": 65789 },
  { "id": "13-1027", "total": 64148 },
  { "id": "13-1002", "total": 64000 },
  { "id": "13-1028", "total": 62990 },
  { "id": "13-1015", "total": 62769 },
  { "id": "13-1019", "total": 61606 },
  { "id": "13-1011", "total": 58809 },
  { "id": "13-1010", "total": 57807 },
  { "id": "13-1012", "total": 54510 },
  { "id": "13-1025", "total": 53133 },
  { "id": "13-1023", "total": 51041 },
  { "id": "13-1022", "total": 48686 },
  { "id": "13-1007", "total": 47975 },
  { "id": "13-1018", "total": 44414 },
  { "id": "13-1031", "total": 43137 },
  { "id": "13-1029", "total": 42789 },
  { "id": "13-1016", "total": 38431 },
  { "id": "13-1009", "total": 36602 },
  { "id": "13-1005", "total": 32521 },
  { "id": "13-1013", "total": 31871 },
  { "id": "13-1024", "total": 29305 },
  { "id": "13-1001", "total": 27402 },
  { "id": "13-1008", "total": 23398 },
  { "id": "13-1035", "total": 20300 },
  { "id": "13-1034", "total": 18267 },
  { "id": "13-1014", "total": 15967 },
  { "id": "13-1006", "total": 15451 },
  { "id": "13-1030", "total": 10812 }
];

export const bT: MonthOccupancy[] = [
  {
    "month": {
      "en": "Jun 25",
      "ar": "يون 25"
    },
    "occ": 4
  },
  {
    "month": {
      "en": "Jul 25",
      "ar": "يول 25"
    },
    "occ": 19.8
  },
  {
    "month": {
      "en": "Aug 25",
      "ar": "أغس 25"
    },
    "occ": 46.5
  },
  {
    "month": {
      "en": "Sep 25",
      "ar": "سبت 25"
    },
    "occ": 74.3
  },
  {
    "month": {
      "en": "Oct 25",
      "ar": "أكت 25"
    },
    "occ": 81.6
  },
  {
    "month": {
      "en": "Nov 25",
      "ar": "نوف 25"
    },
    "occ": 75.6
  },
  {
    "month": {
      "en": "Dec 25",
      "ar": "ديس 25"
    },
    "occ": 76.2
  },
  {
    "month": {
      "en": "Jan 26",
      "ar": "يني 26"
    },
    "occ": 76.8
  },
  {
    "month": {
      "en": "Feb 26",
      "ar": "فبر 26"
    },
    "occ": 69.4
  },
  {
    "month": {
      "en": "Mar 26",
      "ar": "مار 26"
    },
    "occ": 59.8
  },
  {
    "month": {
      "en": "Apr 26",
      "ar": "أبر 26"
    },
    "occ": 60
  },
  {
    "month": {
      "en": "May 26",
      "ar": "مايو 26"
    },
    "occ": 63
  },
  {
    "month": {
      "en": "Jun 26",
      "ar": "يونيو 26"
    },
    "occ": 55
  },
  {
    "month": {
      "en": "Jul 26",
      "ar": "يوليو 26"
    },
    "occ": 58
  },
  {
    "month": {
      "en": "Jul 1-13*",
      "ar": "١-١٣ يوليو*"
    },
    "occ": 56
  }
];

export const Ire: UnitOccupancy[] = [
  {
    "id": "13-1015",
    "avg": 93.6
  },
  {
    "id": "13-1002",
    "avg": 90.6
  },
  {
    "id": "13-1003",
    "avg": 91
  },
  {
    "id": "13-1026",
    "avg": 88.5
  },
  {
    "id": "13-1004",
    "avg": 87.7
  },
  {
    "id": "13-1033",
    "avg": 86.2
  },
  {
    "id": "13-1028",
    "avg": 83.5
  },
  {
    "id": "13-1007",
    "avg": 67.8
  },
  {
    "id": "13-1027",
    "avg": 77.1
  },
  {
    "id": "13-1032",
    "avg": 79.3
  },
  {
    "id": "13-1020",
    "avg": 80.1
  },
  {
    "id": "13-1030",
    "avg": 81.8
  },
  {
    "id": "13-1010",
    "avg": 75.6
  },
  {
    "id": "13-1023",
    "avg": 74.5
  },
  {
    "id": "13-1017",
    "avg": 72.5
  },
  {
    "id": "13-1011",
    "avg": 72.7
  },
  {
    "id": "13-1019",
    "avg": 70.1
  },
  {
    "id": "13-1029",
    "avg": 56.5
  },
  {
    "id": "13-1025",
    "avg": 67.3
  },
  {
    "id": "13-1012",
    "avg": 68.8
  },
  {
    "id": "13-1013",
    "avg": 57.5
  },
  {
    "id": "13-1009",
    "avg": 51.6
  },
  {
    "id": "13-1031",
    "avg": 61.5
  },
  {
    "id": "13-1022",
    "avg": 54.5
  },
  {
    "id": "13-1024",
    "avg": 50.2
  },
  {
    "id": "13-1001",
    "avg": 46.8
  },
  {
    "id": "13-1005",
    "avg": 35.2
  },
  {
    "id": "13-1008",
    "avg": 35.2
  },
  {
    "id": "13-1018",
    "avg": 33.9
  },
  {
    "id": "13-1035",
    "avg": 28.4
  },
  {
    "id": "13-1016",
    "avg": 18.2
  },
  {
    "id": "13-1034",
    "avg": 16.3
  },
  {
    "id": "13-1021",
    "avg": 18
  },
  {
    "id": "13-1006",
    "avg": 9.1
  },
  {
    "id": "13-1014",
    "avg": 2.6
  }
];

export const H8: ExpenseItem[] = [
  {
    "label": {
      "en": "Payroll & Related Exp-One Housman",
      "ar": "الرواتب والمصاريف ذات الصلة لموظف التنظيف المخصص"
    },
    "amount": 39600
  },
  {
    "label": {
      "en": "Property & Guest Supplies",
      "ar": "المستهلكات العقارية ومستلزمات الضيوف"
    },
    "amount": 9600
  },
  {
    "label": {
      "en": "Maintenance",
      "ar": "الصيانة"
    },
    "amount": 24000
  },
  {
    "label": {
      "en": "Laundry",
      "ar": "غسيل الأقمشة والبياضات"
    },
    "amount": 18000
  },
  {
    "label": {
      "en": "Supervisor & Operation Support",
      "ar": "الإشراف ودعم العمليات"
    },
    "amount": 18000
  },
  {
    "label": {
      "en": "Car Rent & Fuel",
      "ar": "إيجار السيارة والوقود"
    },
    "amount": 24000
  }
];

export const G8: ExpenseItem[] = [
  {
    "label": {
      "en": "Marketing Exp",
      "ar": "التسويق والدعاية"
    },
    "amount": 30000
  },
  {
    "label": {
      "en": "Reservation System",
      "ar": "نظام الحجز وإدارة العقار"
    },
    "amount": 6000
  },
  {
    "label": {
      "en": "Central Management (Admin-Finance-HR-Sales & Marketing-Customer Service - Contract)",
      "ar": "وظائف الإدارة المركزية (الإدارة، المالية، الموارد البشرية، المبيعات والتسويق، تجربة العملاء والعقود)"
    },
    "amount": 150000
  }
];

export const Pb: FloorItem[] = [
  {
    "name": {
      "en": "Ground Floor",
      "ar": "الطابق الأرضي"
    },
    "units": [
      {
        "id": "1001",
        "occupied": true
      },
      {
        "id": "1002",
        "occupied": true
      },
      {
        "id": "1003",
        "occupied": true
      },
      {
        "id": "1004",
        "occupied": true
      },
      {
        "id": "1005",
        "occupied": false
      },
      {
        "id": "1006",
        "occupied": true
      },
      {
        "id": "1007",
        "occupied": false
      },
      {
        "id": "1008",
        "occupied": true
      },
      {
        "id": "1009",
        "occupied": true
      }
    ]
  },
  {
    "name": {
      "en": "1st Floor",
      "ar": "الطابق الأول"
    },
    "units": [
      {
        "id": "1010",
        "occupied": true
      },
      {
        "id": "1011",
        "occupied": true
      },
      {
        "id": "1012",
        "occupied": true
      },
      {
        "id": "1013",
        "occupied": true
      },
      {
        "id": "1014",
        "occupied": false
      },
      {
        "id": "1015",
        "occupied": false
      },
      {
        "id": "1016",
        "occupied": true
      },
      {
        "id": "1017",
        "occupied": false
      },
      {
        "id": "1018",
        "occupied": true
      }
    ]
  },
  {
    "name": {
      "en": "2nd Floor",
      "ar": "الطابق الثاني"
    },
    "units": [
      {
        "id": "1019",
        "occupied": true
      },
      {
        "id": "1020",
        "occupied": false
      },
      {
        "id": "1021",
        "occupied": true
      },
      {
        "id": "1022",
        "occupied": true
      },
      {
        "id": "1023",
        "occupied": false
      },
      {
        "id": "1024",
        "occupied": true
      },
      {
        "id": "1025",
        "occupied": true
      },
      {
        "id": "1026",
        "occupied": true
      },
      {
        "id": "1027",
        "occupied": true
      },
      {
        "id": "1028",
        "occupied": true
      }
    ]
  },
  {
    "name": {
      "en": "3rd Floor",
      "ar": "الطابق الثالث"
    },
    "units": [
      {
        "id": "1029",
        "occupied": false
      },
      {
        "id": "1030",
        "occupied": false
      },
      {
        "id": "1031",
        "occupied": true
      },
      {
        "id": "1032",
        "occupied": false
      },
      {
        "id": "1033",
        "occupied": false
      },
      {
        "id": "1034",
        "occupied": true
      },
      {
        "id": "1035",
        "occupied": true
      }
    ]
  }
];

export const fi: string[] = [
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/bc7e31353_IMG_7648.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/27869db3f_IMG_7642.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/7bd5f6827_IMG_7643.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/2f5033dd3_IMG_7690.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/3f35026f0_IMG_7692.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/e6cb31a68_IMG_7695.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/ae902a903_IMG_7695.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/b1566e1a1_IMG_7696.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/bd64e4dc3_IMG_7697.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/2a47128e9_IMG_7698.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/e259c304d_IMG_7694.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/04bf57ab9_IMG_7779.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/d66f72218_IMG_7780.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/26021a505_IMG_7781.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/51f562508_IMG_7782.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/0c86108b6_IMG_7660.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/ef884b69e_IMG_7662.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/e5544a9e2_IMG_7663.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/970a92209_IMG_7665.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/ad6c560b6_IMG_7666.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/a0ef70b5e_IMG_7670.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/74b857bb4_IMG_7671.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/908c91cea_IMG_7672.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/67e7e607d_IMG_7673.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/872aad122_IMG_7674.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/16d49dc0f_IMG_7676.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/3980d5bc2_IMG_7678.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/8b19f6720_IMG_7677.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/8406202e8_IMG_7681.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/14a59fbda_IMG_7683.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/c738efe9e_IMG_7684.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/c3625cc1b_IMG_7687.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/29bf0394f_IMG_3597.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/f3bc02c3c_IMG_3599.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/552ebef6d_IMG_7626.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/3e2d2d796_IMG_7627.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/580f93f30_IMG_7700.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/e0e4e8dc2_IMG_7699.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/cf2c9c909_IMG_7688.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/39db1a31d_IMG_7648.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/8b90eff3a_IMG_7663.jpg",
  "https://media.base44.com/images/public/69e77c86f851f551b6d94035/1a0666fe4_IMG_7660.jpg"
];

export const Wre: ChallengeItem[] = [
  {
    "id": 1,
    "title": {
      "en": "Flooring and Carpet Condition",
      "ar": "حالة الأرضيات والسجاد"
    },
    "desc": {
      "en": "The white carpeting throughout the units has deteriorated significantly over the contract period and now presents a brownish, worn appearance. This creates a negative first impression for the premium tenant segment we are actively targeting and represents a meaningful barrier to achieving higher nightly rates.",
      "ar": "تدهورت حالة السجاد الأبيض في الوحدات بشكل ملحوظ خلال فترة العقد ويبدو الآن بلون بني مهترئ. هذا يخلق انطباعًا أوليًا سلبيًا لدى شريحة المستأجرين المميزين التي نستهدفها ويمثل عائقًا أمام تحقيق أسعار أعلى."
    },
    "opportunity": {
      "en": "Replacing the carpeting with higher-quality, durable flooring would immediately elevate the visual appeal of the units and support a stronger pricing position in the market.",
      "ar": "استبدال السجاد بأرضيات عالية الجودة ومتينة سيرفع فورًا الجاذبية البصرية للوحدات ويدعم مكانة تسعيرية أقوى في السوق."
    },
    "type": "improvement"
  },
  {
    "id": 2,
    "title": {
      "en": "Bathroom Shower Enclosures",
      "ar": "حواجز الدش في الحمامات"
    },
    "desc": {
      "en": "The bathrooms across the building currently lack shower glass enclosures, which reduces the overall finish quality and is consistently noted by prospective tenants comparing the units against competing properties in the Al Aqiq area.",
      "ar": "تفتقر حمامات المبنى إلى حواجز الدش الزجاجية، مما يقلل من جودة التشطيب العام ويُلاحظه المستأجرون المحتملون عند مقارنة الوحدات بالعقارات المنافسة في منطقة العقيق."
    },
    "opportunity": {
      "en": "Installing frameless shower glass in all bathrooms would deliver a significant upgrade in perceived quality at a relatively modest cost, directly improving conversion rates from viewings to signed contracts.",
      "ar": "تركيب حواجز دش زجاجية بدون إطار في جميع الحمامات سيحقق تحسينًا ملحوظًا في الجودة المُدركة بتكلفة معقولة نسبيًا، مما يحسن مباشرة معدلات التحويل من المشاهدات إلى العقود الموقعة."
    },
    "type": "improvement"
  },
  {
    "id": 3,
    "title": {
      "en": "Kitchen Shelf Surfaces",
      "ar": "أسطح رفوف المطبخ"
    },
    "desc": {
      "en": "The kitchen shelving units are currently constructed from gypsum board, which is fragile and unsuitable for regular kitchen use. This results in guest hesitation to fully utilise the kitchen space and increases the frequency of minor damage claims.",
      "ar": "رفوف المطبخ مصنوعة حاليًا من الجبس، وهو مادة هشة وغير مناسبة للاستخدام المطبخي المنتظم. يؤدي ذلك إلى تردد المستأجرين في استخدام المطبخ بشكل كامل وزيادة تكرار مطالبات الأضرار الطفيفة."
    },
    "opportunity": {
      "en": "Upgrading the kitchen shelf surfaces to marble or a high-quality composite material would resolve the durability issue, enhance the kitchen aesthetic, and allow guests to utilise this space freely without concern for damage.",
      "ar": "ترقية أسطح رفوف المطبخ إلى الرخام أو مادة مركبة عالية الجودة سيحل مشكلة المتانة ويحسن الجمالية المطبخية ويتيح للضيوف استخدام هذا المساحة بحرية دون قلق من الأضرار."
    },
    "type": "improvement"
  },
  {
    "id": 4,
    "title": {
      "en": "Kitchen Cooking Facilities",
      "ar": "معدات الطهي في المطبخ"
    },
    "desc": {
      "en": "The current cooking setup across the units is limited to a single electric hot plate. For guests seeking longer-term accommodation with a fully functional kitchen, this is consistently flagged as a shortcoming. A proper cooking surface is a standard expectation for both short and long-term residential guests in this market.",
      "ar": "يقتصر إعداد الطهي الحالي في الوحدات على صفيحة كهربائية واحدة. بالنسبة للضيوف الباحثين عن إقامة طويلة الأمد مع مطبخ وظيفي كامل، يُشار إلى هذا باستمرار كنقص. سطح الطهي المناسب هو توقع معياري للضيوف السكنيين قصيري وطويلي الأمد في هذا السوق."
    },
    "opportunity": {
      "en": "Providing a two-burner gas or electric stove in each unit would meaningfully expand the appeal to long-term residential tenants and families, enabling higher occupancy and stronger retention rates.",
      "ar": "توفير موقد غاز أو كهربائي ذي شعلتين في كل وحدة سيوسع بشكل ملموس الجاذبية للمستأجرين السكنيين طويلي الأمد والعائلات، مما يتيح إشغالًا أعلى ومعدلات احتفاظ أقوى."
    },
    "type": "improvement"
  },
  {
    "id": 5,
    "title": {
      "en": "TV Area Furniture and Storage",
      "ar": "أثاث منطقة التلفزيون والتخزين"
    },
    "desc": {
      "en": "The area beneath the wall-mounted television in each unit is currently empty, leaving a visual gap that guests frequently notice. Beyond aesthetics, the absence of a TV console or sideboard leaves tenants without a practical surface for personal items, remote controls, and daily essentials.",
      "ar": "المساحة أسفل التلفزيون المثبت على الجدار في كل وحدة فارغة حاليًا، مما يترك فراغًا بصريًا يلاحظه الضيوف باستمرار. إضافة إلى الجانب الجمالي، فإن غياب طاولة التلفزيون أو الخزانة الجانبية يحرم المستأجرين من سطح عملي للأغراض الشخصية والأجهزة التحكم والمستلزمات اليومية."
    },
    "opportunity": {
      "en": "Adding a well-designed TV console to each unit would resolve both the visual and functional gap, contributing to a more complete, hotel-quality feel that supports higher guest satisfaction scores and renewal rates.",
      "ar": "إضافة طاولة تلفزيون مصممة جيدًا لكل وحدة سيحل الفجوة البصرية والوظيفية، ويساهم في إحساس أكثر اكتمالًا بجودة الفندق يدعم ارتفاع درجات رضا الضيوف ومعدلات التجديد."
    },
    "type": "improvement"
  },
  {
    "id": 6,
    "title": {
      "en": "Laundry and Dishwashing Facilities in Select Units",
      "ar": "مرافق الغسيل وغسيل الأطباق في وحدات محددة"
    },
    "desc": {
      "en": "Five units in the building (13-1009, 13-1034, 13-1035, 13-1016, and 13-1024) are equipped with a kitchen sink but lack both a washing machine and a dishwasher connection. This is a tangible deterrent for long-term residential guests who rely on these facilities for daily living and represents a direct barrier to closing occupancy on these particular units.",
      "ar": "خمس وحدات في المبنى (13-1009، 13-1034، 13-1035، 13-1016، و13-1024) مجهزة بحوض مطبخ لكنها تفتقر إلى الغسالة والوصلة الكهربائية المناسبة. هذا رادع ملموس للمستأجرين السكنيين طويلي الأمد الذين يعتمدون على هذه المرافق في حياتهم اليومية ويمثل عائقًا مباشرًا أمام تحقيق الإشغال في هذه الوحدات."
    },
    "opportunity": {
      "en": "Equipping these five units with washing machine connections would remove a recurring objection from long-term tenants and support stronger occupancy retention in this segment of the portfolio.",
      "ar": "تجهيز هذه الوحدات الخمس بوصلات الغسالة سيزيل اعتراضًا متكررًا من المستأجرين طويلي الأمد ويدعم استمرارية إشغال أقوى في هذا الجزء من المحفظة."
    },
    "type": "operational"
  },
  {
    "id": 7,
    "title": {
      "en": "Rent Freeze on Early-Agreement Units",
      "ar": "تجميد الإيجار على وحدات الاتفاقيات المبكرة"
    },
    "desc": {
      "en": "Two units in the building (13-1002 and 13-1004) were secured at opening-offer prices of SAR 4,992 and SAR 6,500 respectively to support early occupancy. Following the building launch, the Saudi government introduced regulations freezing residential rents for a five-year period, which prevents any upward adjustment to these contracts regardless of prevailing market rates.",
      "ar": "تم تأمين وحدتين في المبنى (13-1002 و13-1004) بأسعار عروض الافتتاح بمبلغ 4,992 و6,500 ريال على التوالي لدعم الإشغال المبكر. عقب إطلاق المبنى، أصدرت الحكومة السعودية لوائح تجميد الإيجارات السكنية لمدة خمس سنوات، مما يمنع أي تعديل تصاعدي على هذه العقود بغض النظر عن أسعار السوق السائدة."
    },
    "opportunity": {
      "en": "This is an external regulatory constraint that is outside the scope of management to resolve in the short term. The impact will naturally unwind as these contracts reach their eligible renewal window, at which point pricing can be aligned to market levels.",
      "ar": "هذا قيد تنظيمي خارجي خارج نطاق الإدارة لحله على المدى القريب. سيتبدد الأثر بشكل طبيعي مع وصول هذه العقود إلى نافذة التجديد المؤهلة، حيث يمكن عندها مواءمة التسعير مع مستويات السوق."
    },
    "type": "regulatory"
  },
  {
    "id": 8,
    "title": {
      "en": "Geopolitical Headwinds Impacting Regional Demand",
      "ar": "عوامل جيوسياسية تؤثر على الطلب الإقليمي"
    },
    "desc": {
      "en": "Escalating geopolitical tensions in the GCC region, particularly surrounding the evolving situation between the United States and Iran, contributed to a softening in expatriate demand during certain periods of the contract. One long-term tenant (Unit 13-1011) vacated the property citing personal concerns related to the regional security climate. This pattern reflects a broader market trend observable across multiple residential assets in Riyadh during the same period.",
      "ar": "ساهمت التوترات الجيوسياسية المتصاعدة في منطقة الخليج، ولا سيما الوضع المتطور بين الولايات المتحدة وإيران، في تراجع طلب المغتربين خلال فترات معينة من العقد. غادر أحد المستأجرين طويلي الأمد (الوحدة 13-1011) العقار مستشهدًا بمخاوف شخصية تتعلق بمناخ الأمن الإقليمي. يعكس هذا النمط اتجاهًا سوقيًا أوسع يمكن ملاحظته عبر عدة أصول سكنية في الرياض خلال نفس الفترة."
    },
    "opportunity": {
      "en": "This is an external factor that affects the broader residential market. We continue to monitor demand signals closely and will adjust our marketing approach as conditions evolve.",
      "ar": "هذا عامل خارجي يؤثر على السوق السكني الأوسع. نواصل مراقبة إشارات الطلب عن كثب وسنعدّل نهجنا التسويقي مع تطور الظروف."
    },
    "type": "external"
  }
];

export const qre: ComparisonItem[] = [
  {
    "item": {
      "en": "Contract Period",
      "ar": "فترة العقد"
    },
    "current": {
      "en": "May 2025 to June 2026",
      "ar": "مايو 2025 إلى يونيو 2026"
    },
    "proposed": {
      "en": "July 2026 onwards",
      "ar": "يوليو 2026 فصاعداً"
    }
  },
  {
    "item": {
      "en": "Fee Structure",
      "ar": "هيكل الرسوم"
    },
    "current": {
      "en": "Flat 15%",
      "ar": "ثابتة 15%"
    },
    "proposed": {
      "en": "Flat 20%",
      "ar": "ثابتة 20%"
    }
  },
  {
    "item": {
      "en": "Actual Revenue (21-05-25 Till 30-06-26)",
      "ar": "الإيراد الفعلي (21-05-25 إلى 30-06-26)"
    },
    "current": {
      "en": "SAR 1,712,462",
      "ar": "1,712,462 ريال"
    },
    "proposed": {
      "en": "SAR 1,712,462",
      "ar": "1,712,462 ريال"
    }
  },
  {
    "item": {
      "en": "Mathwa 15% Share vs. 20% Proposal",
      "ar": "حصة مثوى 15% مقابل مقترح 20%"
    },
    "current": {
      "en": "SAR 256,869",
      "ar": "256,869 ريال"
    },
    "proposed": {
      "en": "SAR 342,492",
      "ar": "342,492 ريال"
    }
  },
  {
    "item": {
      "en": "Actual Operating Costs",
      "ar": "التكاليف التشغيلية الفعلية"
    },
    "current": {
      "en": "SAR 319,200",
      "ar": "319,200 ريال"
    },
    "proposed": {
      "en": "SAR 319,200",
      "ar": "319,200 ريال"
    }
  },
  {
    "item": {
      "en": "Actual Net Margin / Gap",
      "ar": "صافي الهامش الفعلي / الفجوة"
    },
    "current": {
      "en": "-SAR 62,331 (-24% Loss)",
      "ar": "-62,331 ريال (خسارة -24%)"
    },
    "proposed": {
      "en": "+SAR 23,292 (+9.1% Profit)",
      "ar": "+23,292 ريال (ربح +9.1%)"
    }
  },
  {
    "item": {
      "en": "6M Forecast (01-07-26 Till 31-12-26)",
      "ar": "توقعات 6 أشهر (01-07-26 إلى 31-12-26)"
    },
    "current": {
      "en": "SAR 950,000",
      "ar": "950,000 ريال"
    },
    "proposed": {
      "en": "SAR 950,000",
      "ar": "950,000 ريال"
    }
  },
  {
    "item": {
      "en": "Mathwa Share 15% vs. 20% on Forecast",
      "ar": "حصة مثوى 15% مقابل 20% على المتوقع"
    },
    "current": {
      "en": "SAR 142,500",
      "ar": "142,500 ريال"
    },
    "proposed": {
      "en": "SAR 190,000",
      "ar": "190,000 ريال"
    }
  },
  {
    "item": {
      "en": "Forecast Operating Costs (6 Months)",
      "ar": "التكاليف التشغيلية المتوقعة (6 أشهر)"
    },
    "current": {
      "en": "SAR 159,600",
      "ar": "159,600 ريال"
    },
    "proposed": {
      "en": "SAR 159,600",
      "ar": "159,600 ريال"
    }
  },
  {
    "item": {
      "en": "Forecast Net Margin / Gap",
      "ar": "صافي الهامش المتوقع / الفجوة"
    },
    "current": {
      "en": "-SAR 17,100 (-12% Loss)",
      "ar": "-17,100 ريال (خسارة -12%)"
    },
    "proposed": {
      "en": "+SAR 30,400 (+19% Profit)",
      "ar": "+30,400 ريال (ربح +19%)"
    }
  }
];
