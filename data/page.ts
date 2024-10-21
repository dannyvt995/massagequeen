export const common = {

}

type Service = {
    img: string;
    name: string;
    detail: string[];
    time: number;
    price: string;
    note: string;
    para: string[];
};

// Sử dụng Record để định nghĩa listService
export const listService: Record<string, Service> = {
    "massage-vip": {
        img: "http://massagequeen.vn/asset/images/picture/room01.jpg",
        name: "VIP",
        detail: [
            "Xông hơi thảo dược, ướt, khô.",
            "Massage body",
            "Massage đá nóng",
            "Skill HJ, BJ đặc biệt",
            "Thức ăn phục vụ: Trái cây, mì bò trứng. (miễn phí)",
            "Trà gừng, suối, bò cụng ... (miễn phí)"
        ],
        time: 70,
        price: "500,000 VND",
        note:"Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para:[
            "Người ta thường nói “cơ thể con người là một ngôi đền bí ẩn cần được khám phá”. Vậy thì hôm nay, với dịch vụ Massage Vip – Massage chuẩn phái mạnh của Hoa Kiều - sẽ giúp các chàng khám phá các “bí mật” ẩn sâu bên trong “ngôi đền” của chính mình.",
            "Thử tưởng tượng các anh sau những mỏi mệt bộn bề của một ngày dài làm việc, sau cuộc vui chếnh choáng cùng bạn bè và men say ngà ngà phảng phất trong người, ai chẳng muốn tìm đến một nơi để đắm mình thư giãn và chìm vào những giờ phút đắm say tuyệt vời?",
            "Đến với Massage Queen để trải nghiệm liệu pháp massage vip độc đáo, bảo đảm các chàng tha hồ đắm mình vào những phút giây đầy mơ ước ấy.",
            "Hương tinh dầu thoang thoảng cùng hương hoa mật ngọt tiết ra từ cơ thể các kỹ thuật viên xinh đẹp, quyện hòa trong không gian sang trọng kín đáo, sẽ kích thích những giác quan trong cơ thể chàng, giúp chàng từ từ thả lỏng, đưa chàng đến những thư giãn thuần túy, rồi những khoái cảm đặc sắc, tuyệt vời. Những bộn bề cuộc sống cứ thế mà gác lại đằng sau, mảy may tiêu biến.",
            "Massage Vip - đẩy lùi những muộn phiền cuộc sống, đong đầy những ngọt ngào bay bổng."
        ]
    },
    "massage-super-vip-01": {
        img: "http://massagequeen.vn/asset/images/picture/room01.jpg",
        name: "SUPER VIP 01",
        detail: [
            "Xông hơi thảo dược, ướt, khô.",
            "Massage body",
            "Massage đá nóng",
            `Trườn Thái nóng bỏng "Full" HD`,
            "Tắm tiên hái đào trong rượu vang ngọt ngào",
            "Thư giãn 69 tình yêu",
            `Skill HJ, BJ "đỉnh cao"`,
            "Thức ăn phục vụ: Trái cây, mì bò trứng.(miễn phí)",
            "Trà gừng, suối, bò cụng ... (miễn phí)",
        ],
        time: 80,
        price: "800,000 VND",
        note:"Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para:[
            "Massage Super Vip - liệu pháp “đắt hàng” nhất tại Massage Queen Spa - các chàng đã thử? Nếu chưa thử thì thật phí mất công đến Massage Queen. Bởi tại gói dịch vụ độc đáo này, chúng tôi có massage lingam - massage “yêu chiều” quyền trượng ánh sáng của chàng hiếm có khó tìm.",
        ]
    },
    "massage-super-vip-02": {
        img: "http://massagequeen.vn/asset/images/picture/room01.jpg",
        name: "SUPER VIP 02",
        detail: [
            "Xông hơi thảo dược, ướt, khô.",
            "Massage body",
            "Massage đá nóng",
            `Trườn nuru nóng bỏng “Full” HD`,
            "Tắm tiên hái đào trong rượu vang ngọt ngào",
            "Thư giãn 69 tình yêu",
            "Nhân đôi thư giãn ngập tràn đê mê",
            `Skill HJ, BJ "đỉnh cao"`,
            "Thức ăn phục vụ: Trái cây, mì bò trứng.(miễn phí)",
            "Trà gừng, suối, bò cụng ... (miễn phí)",
            "Dịch vụ cosplay"
        ],
        time: 90,
        price: "1,000,000 VND",
        note:"Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para:[
            'Ai mà chẳng muốn một lần làm bậc Đế Vương, được yêu chiều cung phụng? Thế thì hôm nay, Massage Queen vừa hay cho ra đời gói Massage King - phục vụ những "ông hoàng" trên ngôi báu.',
            'Bảo đảm các anh lúc đi hết mình, lúc về hết hồn. Hết hồn bởi vì các em kỹ thuật viên ở đây làm việc hết lòng quá, mà body em nào cũng "hết nước chấm", khiến các anh mê mẩn mãi không thôi. Đến với gói King độc đáo này, các chàng tha hồ ôm các tiên nữ vào lòng, tha hồ cùng nàng "tắm tiên hái đào" trong dòng rượu vang ngọt ngào. Những giấc mơ thư giãn tình yêu nồng cháy, nóng bỏng và đê mê sẽ theo chàng len lỏi vào sâu bên trong căn phòng kín đáo, nơi cả 2 cùng nhau trải qua những phút giây tuyệt diệu. Muốn được yêu chiều? Đến ngay Massage Queen! Kỹ thuật viên với bờ môi căn mọng, thân hình nõn nà "ngon cơm & mọng nước", thêm cả các skill đỉnh của chóp, ắt hẳn sẽ làm siêu lòng cả những vị khách khó tính nhất. Chàng nào muốn được ôm trọn combo trườn nuru nóng bỏng "full HD", thư giãn "tuyệt đỉnh thăng hoa", nhất định không được bỏ qua gói Massage King này nhé. Tại Massage Queen chỉ tuyển chọn những gì tinh túy nhất dành cho chàng, hệt như bậc Đế Vương thượng đẳng chỉ có thể dùng những "mồi ngon" hảo hạng. Massage King - in đậm dấu ấn của bậc Đế Vương'
        ]
    },
    "massage-super-vip-03": {
        img: "http://massagequeen.vn/asset/images/picture/room01.jpg",
        name: "SUPER VIP 03",
        detail: [
            "Xông hơi thảo dược, ướt, khô.",
            "Massage body",
            "Massage đá nóng",
            `Trườn nuru nóng bỏng “Full” HD`,
            "Tắm tiên hái đào trong rượu vang ngọt ngào",
            "Thư giãn 69 tình yêu",
            "Thư giãn HJ, BJ “tuyệt đỉnh” (Không giới hạn)",
            "Dịch vụ cosplay",
            "Chọn KTV trực tiếp",
            "Thức ăn phục vụ: Trái cây, mì bò trứng.(miễn phí)",
            "Trà gừng, suối, bò cụng ... (miễn phí)"
        ],
        time: 100,
        price: "1,200,000 VND",
        note:"Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para:[
            'Ai mà chẳng muốn một lần làm bậc Đế Vương, được yêu chiều cung phụng? Thế thì hôm nay, Massage Queen vừa hay cho ra đời gói Massage King - phục vụ những "ông hoàng" trên ngôi báu.',
            'Bảo đảm các anh lúc đi hết mình, lúc về hết hồn. Hết hồn bởi vì các em kỹ thuật viên ở đây làm việc hết lòng quá, mà body em nào cũng "hết nước chấm", khiến các anh mê mẩn mãi không thôi. Đến với gói King độc đáo này, các chàng tha hồ ôm các tiên nữ vào lòng, tha hồ cùng nàng "tắm tiên hái đào" trong dòng rượu vang ngọt ngào. Những giấc mơ thư giãn tình yêu nồng cháy, nóng bỏng và đê mê sẽ theo chàng len lỏi vào sâu bên trong căn phòng kín đáo, nơi cả 2 cùng nhau trải qua những phút giây tuyệt diệu. Muốn được yêu chiều? Đến ngay Massage Queen! Kỹ thuật viên với bờ môi căn mọng, thân hình nõn nà "ngon cơm & mọng nước", thêm cả các skill đỉnh của chóp, ắt hẳn sẽ làm siêu lòng cả những vị khách khó tính nhất. Chàng nào muốn được ôm trọn combo trườn nuru nóng bỏng "full HD", thư giãn "tuyệt đỉnh thăng hoa", nhất định không được bỏ qua gói Massage King này nhé. Tại Massage Queen chỉ tuyển chọn những gì tinh túy nhất dành cho chàng, hệt như bậc Đế Vương thượng đẳng chỉ có thể dùng những "mồi ngon" hảo hạng. Massage King - in đậm dấu ấn của bậc Đế Vương'
        ]
    },
    "massage-super-vip-04": {
        img: "http://massagequeen.vn/asset/images/picture/room01.jpg",
        name: "SUPER VIP 04",
        detail: [
            "Xông hơi thảo dược, ướt, khô.",
            "Massage body",
            "Massage đá nóng",
            `Trườn nuru nóng bỏng “Full” HD`,
            "Tắm tiên hái đào trong rượu vang ngọt ngào",
            "Thư giãn 69 tình yêu",
            `Skill HJ, BJ "đỉnh cao"`,
            "Dịch vụ cosplay",
            "Chọn KTV trực tiếp",
            "Thức ăn phục vụ: Trái cây, mì bò trứng.(miễn phí)",
            "Trà gừng, suối, bò cụng ... (miễn phí)"
        ],
        time: 120,
        price: "1,500,000 VND",
        note:"Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para:[
            'Massage Super Vip - liệu pháp “đắt hàng” nhất tại Massage Queen Spa - các chàng đã thử? Nếu chưa thử thì thật phí mất công đến Massage Queen. Bởi tại gói dịch vụ độc đáo này, chúng tôi có massage lingam - massage “yêu chiều” quyền trượng ánh sáng của chàng hiếm có khó tìm.',
           
        ]
    },
    "massage-super-queen": {
        img: "http://massagequeen.vn/asset/images/picture/room01.jpg",
        name: "SUPER QUEEN",
        detail: [
            "Xông hơi thảo dược, ướt, khô.",
            "Massage body",
            "Massage đá nóng",
            `Trườn nuru nóng bỏng “Full” HD`,
            "Thăng hoa tột đỉnh cùng 2 bé KTV",
            "Tắm tiên hái đào trong rượu vang ngọt ngào",
            "Thư giãn 69 tình yêu",
            `Skill HJ, BJ “dâng trào đê mê” (2 lần)`,
            "Dịch vụ cosplay",
            "Thức ăn phục vụ: Trái cây, mì bò trứng.(miễn phí)",
            "Trà gừng, suối, bò cụng ... (miễn phí)"
        ],
        time: 120,
        price: "2,000,000 VND",
        note:"Giá vé chưa bao gồm tiền tip, tiền tip được quy định tối thiểu bằng tiền vé.",
        para:[
            'Massage Super Queen - In hằn những khát khao thèm muống của các đấng mày râu. Đến với gói Massage Super Queen, những khát khao thỏa mãn cơ thể của chàng sẽ được được đánh thức, vực dậy bản năng tuyệt vời vốn có của một người đàn ông.',
            'Massage Super Queen là một liệu pháp vô cùng đặc biệt dành cho các vị khách thượng đẳng của Massage Queen. Với liệu pháp đáng đồng tiền bát gạo này, chàng sẽ được chăm sóc bởi tận 2 nàng kỹ thuật viên xinh đẹp của chúng tôi, chắc chắn sẽ là một trải nghiệm thư giãn lí thú và khó quên. Tại đây, chàng tha hồi tắm tiên hái đào trong dòng rượu vang ngọt ngào, thư giãn "thân tình" cùng các phương pháp chăm sóc "độc chiêu" của các nàng. Massage Super Queen đảm bảo đưa chàng đến bến bờ nồng cháy, với tận 2 lần "lên đỉnh" thăng hoa cùng 2 tiên nữ quyến rũ. Bao muộn phiền cuộc sống sẽ chỉ còn lại phía sau, nhường chỗ cho không gian ăn chơi vương giả bậc nhất Sài Thành. Trong không gian uy quyền rực rỡ đó, chàng cùng các nàng quấn lấy nhau, trao nhau những phút giây tuyệt vời. Hơi thở của cả 3 dồn dập liên hồi khi 2 nàng trườn cơ thể ướt đẫm dầu lên chàng, yêu chiều chàng cùng những skill đỉnh của chóp, khiến chàng không kìm nén được mà tuôn trào khoái cảm đắm say. Những dục vọng thầm kín nhất của chàng đều được các tiên nữ lấp đầy, làm cho rạo rực và đê mê ngây ngất. Thử một lần đến với Massage Queen, cùng các nàng yêu chiều những xúc cảm ngọt ngào cho riêng mình, chàng nhé?'
           
        ]
    }
}