import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || !message.trim()) {
      return NextResponse.json({ error: 'الرجاء كتابة رسالة' }, { status: 400 });
    }

    const text = message.toLowerCase();
    let reply = "أنا هنا لأسماعك. يمكنك مشاركتي المزيد عما تدور به أفكارك اليوم.";

    // ردود موجهة حسب مضمون الكلام (يمكن ربطها مستقبلاً بـ API خارجي)
    if (text.includes("متعب") || text.includes("حزين") || text.includes("ضغوط")) {
      reply = "أشعر بك، من الطبيعي أن نمر بأوقات نقتطع فيها طاقة كبيرة وتصيبنا بالإرهاق. لا تحمّل نفسك أكثر من طاقتها، وأنا هنا إذا أردت التفريغ والتحدث أكثر.";
    } else if (text.includes("مرحبا") || text.includes("أهلا") || text.includes("السلام")) {
      reply = "أهلاً بك! سعيد بحديثك معي اليوم. كيف كان يومك وكيف تشعر الآن؟";
    } else if (text.includes("شكرا") || text.includes("يعطيك العافية")) {
      reply = "على الرحب والسعة دائماً! أتمنى لك يوماً أهدأ وأجمل، وأنا موجود في أي وقت تحتاج فيه للحديث.";
    } else if (text.includes("نصيحة") || text.includes("ماذا أفعل")) {
      reply = "أفضل نقطة للبدء هي أن تأخذ نفساً عميقاً، وتفرّق بين الأشياء التي يمكنك التحكم بها والأنشطة التي تخرج عن إرادتك. خذ استراحة قصيرة وخطوة واحدة صغيرة كل مرة.";
    } else {
      reply = `أفهم ما تقصده بخصوص "${message}". أحياناً مجرد التعبير عن الفكرة يقلل من ثقلها. كيف تحب أن نتعامل مع هذا الأمر معا؟`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'حدث خطأ في النظام' }, { status: 500 });
  }
}