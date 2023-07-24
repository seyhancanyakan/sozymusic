import { useRouter } from "next/navigation";  
import { toast } from "react-hot-toast";  
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { postData } from "@/libs/helpers";
import PlayerContent from './PlayerContent';



const AccountContent = () => {
    cont router = useRouter();
    const subscribeModal = useSubscribeModal();
    const { isLoading, subcription, user } = useUser();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        } 
    }, [isLoading, user, router]);

    const redirectToCustomerPortal = async () => {
        setLoading(true);
        try {
            const { url, error } = await postData({
                url: '/api/create-portal-link' 
            });
        window.location.assign(url);     
        } catch (error) {
            if (error) {
                toast.error(error as Error).message);
            } 
            }
        setLoading(false);  
        }  
        
   
return (
    <div clasname= "mb-7 px-6  ">
        {!subcription && (
        <div classname="flex flex-col gap-y-4">
            <p>No active PlayerContent</p>
            <Button
              onClick={subscribeModal.onOpen} 
              classname="w-[300px] bg-violet-600"
              >
            Subcribe 
            </Button>
        </div>
)}

    {subcription && (
    <div className="flex flex-col gap-y-4">
    <p>
    You are currently on the <b>{subcription?.prices?.products?.name } </b> plan.
    </p>
    <Button 
    disabled={loading || isLoading}
    onClick={redirectToCustomerPortal}
    classname="w-[300px]"
    >
        Open Customer portal
        </Button> 
    </div>

)}
    <div className="flex flex-col gap-y-4"></div>
        Account Content
    </div>
);
}

export default AccountContent;